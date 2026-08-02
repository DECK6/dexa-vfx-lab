#!/usr/bin/env node
import { existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const THUMBS = join(ROOT, 'public/thumbs');
const CONCURRENCY = 4;
const FORCE = process.argv.includes('--force') || process.env.FORCE === '1';
const DRY_RUN = process.argv.includes('--dry-run');
const SCRIPT_MTIME = statSync(fileURLToPath(import.meta.url)).mtimeMs;

const { manifest } = await import('../src/fx/manifest.gen.ts');
const allIds = manifest.map((entry) => entry.meta.id);
const effectPaths = new Map(manifest.map((entry) => [entry.meta.id, entry.effectPath]));

function thumbFrame(effectPath = '') {
  // Reveal/transition kernels can be visually complete (and therefore blank or
  // indistinct) at the old midpoint. Capture an earlier, informative phase.
  return /effects\/(?:trans|mask)\//.test(effectPath) ? 67 : 90;
}

mkdirSync(THUMBS, { recursive: true });

// Incremental: skip thumbs newer than their effect source unless --force.
const ids = allIds.filter((id) => {
  if (FORCE) return true;
  const thumb = join(THUMBS, `${id.toLowerCase()}.webp`);
  if (!existsSync(thumb)) return true;
  const effectPath = effectPaths.get(id);
  if (!effectPath) return true;
  try {
    const thumbMtime = statSync(thumb).mtimeMs;
    if (thumbFrame(effectPath) !== 90 && SCRIPT_MTIME > thumbMtime) return true;
    return statSync(join(ROOT, effectPath)).mtimeMs > thumbMtime;
  } catch {
    return true;
  }
});
if (ids.length < allIds.length) {
  console.log(`thumbs — skipping ${allIds.length - ids.length} up-to-date (use --force to re-render all)`);
}
if (DRY_RUN) {
  console.log(`thumbs — dry run (${ids.length} render, ${allIds.length - ids.length} skip, ${allIds.length} total)`);
  process.exit(0);
}

function renderStill(id, workerIndex) {
  const output = join(THUMBS, `${id.toLowerCase()}.webp`);
  const frame = thumbFrame(effectPaths.get(id));
  const args = [
    'remotion',
    'still',
    'src/remotion/index.ts',
    id,
    output,
    `--frame=${frame}`,
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
