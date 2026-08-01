#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const MANIFEST = join(ROOT, 'src/fx/manifest.gen.ts');
const THUMBS = join(ROOT, 'public/thumbs');
const CONCURRENCY = 4;
const FORCE = process.argv.includes('--force') || process.env.FORCE === '1';

const source = readFileSync(MANIFEST, 'utf8');
const allIds = [...source.matchAll(/\{ meta: meta_([A-Z]\d{2}),/g)].map((match) => match[1]);
const effectPaths = new Map(
  [...source.matchAll(/meta: meta_([A-Z]\d{2}), effectPath: '([^']+)'/g)].map((m) => [m[1], m[2]]),
);

mkdirSync(THUMBS, { recursive: true });

// Incremental: skip thumbs newer than their effect source unless --force.
const ids = allIds.filter((id) => {
  if (FORCE) return true;
  const thumb = join(THUMBS, `${id.toLowerCase()}.webp`);
  if (!existsSync(thumb)) return true;
  const effectPath = effectPaths.get(id);
  if (!effectPath) return true;
  try {
    return statSync(join(ROOT, effectPath)).mtimeMs > statSync(thumb).mtimeMs;
  } catch {
    return true;
  }
});
if (ids.length < allIds.length) {
  console.log(`thumbs — skipping ${allIds.length - ids.length} up-to-date (use --force to re-render all)`);
}

function renderStill(id, workerIndex) {
  const output = join(THUMBS, `${id.toLowerCase()}.webp`);
  const args = [
    'remotion',
    'still',
    'src/remotion/index.ts',
    id,
    output,
    '--frame=90',
    `--port=${41000 + workerIndex}`,
  ];

  return new Promise((resolve) => {
    const child = spawn('bunx', args, { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'] });
    let logs = '';
    child.stdout.on('data', (chunk) => {
      logs += chunk;
    });
    child.stderr.on('data', (chunk) => {
      logs += chunk;
    });
    child.on('error', (error) => resolve({ id, ok: false, logs: String(error) }));
    child.on('close', (code) => resolve({ id, ok: code === 0, logs }));
  });
}

let cursor = 0;
const results = [];

async function worker(workerIndex) {
  while (cursor < ids.length) {
    const id = ids[cursor];
    cursor += 1;
    const result = await renderStill(id, workerIndex);
    results.push(result);
    console.log(`${result.ok ? '✓' : '✗'} ${id}`);
  }
}

await Promise.all(
  Array.from({ length: Math.min(CONCURRENCY, ids.length) }, (_, workerIndex) => worker(workerIndex)),
);

const failures = results.filter((result) => !result.ok);
if (failures.length > 0) {
  console.error(`thumbs — ${failures.length}/${ids.length} failed: ${failures.map((f) => f.id).join(', ')}`);
  for (const failure of failures) {
    const tail = failure.logs.trim().split('\n').slice(-12).join('\n');
    console.error(`\n[${failure.id}]\n${tail}`);
  }
  process.exit(1);
}

console.log(`thumbs — OK (${results.length} stills, concurrency ${CONCURRENCY})`);
