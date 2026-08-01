#!/usr/bin/env bun
/**
 * Generate HyperFrames compositions and run the official static/runtime check.
 * Usage: bun scripts/verify-hyperframes.mjs [--selftest] [EFFECT_ID ...]
 */
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { transform } from 'esbuild';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const selftest = args.includes('--selftest');
const requestedIds = args.filter((arg) => !arg.startsWith('--')).map((id) => id.toUpperCase());
const toolTemp = mkdtempSync(join(tmpdir(), 'dexa-hyperframes-tools-'));

function run(command, commandArgs, options = {}) {
  return spawnSync(command, commandArgs, {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: 'pipe',
    env: {
      ...process.env,
      TMPDIR: toolTemp,
      BUN_INSTALL: toolTemp,
      BUN_INSTALL_CACHE_DIR: join(toolTemp, 'cache'),
      XDG_CACHE_HOME: join(toolTemp, 'xdg-cache'),
    },
    ...options,
  });
}

async function transpile(source, sourcefile) {
  const result = await transform(source, {
    loader: 'tsx',
    jsxFactory: 'h',
    jsxFragment: 'Frag',
    format: 'cjs',
    target: 'es2020',
    sourcefile,
    legalComments: 'none',
  });
  return result.code;
}

function fixtures() {
  const reactSource = `
export default {
  kind: 'react',
  render(ctx) {
    const x = 300 + Math.sin(ctx.frame / 18) * 180;
    return <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: '#f5f1e6' }}>
      <div style={{ transform: 'translateX(' + x + 'px)', width: 360 }}>{ctx.subjectNode}</div>
    </div>;
  },
};`;
  const canvasSource = `
export default {
  kind: 'canvas',
  stateful: {
    init() { return { x: 120 }; },
    step(state, ctx) { return { x: 120 + ctx.frame * 4 }; },
    render(g, state, ctx) {
      g.fillStyle = '#0d0e10'; g.fillRect(0, 0, ctx.width, ctx.height);
      g.drawImage(ctx.subject.bitmap, state.x % 900, 240, 360, 180);
    },
  },
};`;
  const base = {
    slug: 'selftest',
    category: 'test',
    cost: 1,
    wave: 1,
    tags: ['selftest'],
    params: { intensity: { type: 'range', min: 0, max: 1, step: 0.1, default: 0.6, label: 'INTENSITY' } },
  };
  return [
    {
      meta: { ...base, id: 'HF-REACT', name: 'HyperFrames React Selftest', kind: 'react' },
      params: { intensity: 0.6 },
      kernelSource: reactSource,
      sourcefile: 'selftest-react.effect.tsx',
    },
    {
      meta: { ...base, id: 'HF-CANVAS', name: 'HyperFrames Canvas Selftest', kind: 'canvas', stateful: true },
      params: { intensity: 0.6 },
      kernelSource: canvasSource,
      sourcefile: 'selftest-canvas.effect.ts',
    },
  ];
}

let inputs;
if (selftest) {
  inputs = await Promise.all(
    fixtures().map(async (fixture) => ({
      ...fixture,
      kernelJs: await transpile(fixture.kernelSource, fixture.sourcefile),
    })),
  );
} else {
  const generated = run('node', ['scripts/gen-kernel-js.mjs']);
  if (generated.status !== 0) {
    console.error('Kernel JS generation failed.');
    console.error([generated.stdout, generated.stderr].filter(Boolean).join('\n').trim());
    process.exit(2);
  }
  console.log(generated.stdout.trim());
  const { manifest } = await import(`../src/fx/manifest.gen.ts?generated=${process.pid}`);
  const { defaultParams } = await import('../src/fx/types.ts');
  const selected = requestedIds.length
    ? manifest.filter((entry) => requestedIds.includes(entry.meta.id.toUpperCase()))
    : manifest;
  const missing = requestedIds.filter((id) => !selected.some((entry) => entry.meta.id.toUpperCase() === id));
  if (missing.length) {
    console.error(`Unknown effect ID(s): ${missing.join(', ')}`);
    process.exit(2);
  }
  inputs = selected.map((entry) => ({
    meta: entry.meta,
    params: defaultParams(entry.meta.params),
    kernelSource: readFileSync(join(ROOT, entry.effectPath), 'utf8'),
    effectPath: entry.effectPath,
  }));
}

if (inputs.length === 0) {
  console.log('No effects selected; nothing to verify. Use --selftest for fixture verification.');
  process.exit(0);
}

const { hyperframesExporter } = await import(`../src/export/hyperframes.ts?generated=${process.pid}`);
const outputDir = mkdtempSync(join(tmpdir(), 'dexa-hyperframes-'));
const results = [];

const version = run('bunx', ['hyperframes', '--version']);
if (version.status !== 0) {
  for (const input of inputs) {
    const file = join(outputDir, `${input.meta.id.toLowerCase().replace(/[^a-z0-9-]/g, '-')}.html`);
    writeFileSync(file, hyperframesExporter.generate(input));
  }
  console.error('HyperFrames CLI was not available. bunx attempted installation but could not run it.');
  console.error([version.stdout, version.stderr].filter(Boolean).join('\n').trim());
  console.error(`Generated snippets retained at: ${outputDir}`);
  process.exit(2);
}
console.log(`HyperFrames CLI: ${(version.stdout || version.stderr).trim()}`);

for (const input of inputs) {
  const file = join(outputDir, `${input.meta.id.toLowerCase().replace(/[^a-z0-9-]/g, '-')}.html`);
  writeFileSync(file, hyperframesExporter.generate(input));
  const checked = run('bunx', ['hyperframes', 'check', file]);
  const output = [checked.stdout, checked.stderr].filter(Boolean).join('\n').trim();
  results.push({ id: input.meta.id, file, ok: checked.status === 0, output });
  console.log(`${checked.status === 0 ? 'PASS' : 'FAIL'} ${input.meta.id} — ${basename(file)}`);
  if (output) console.log(output);
}

const passed = results.filter((result) => result.ok).length;
const failed = results.length - passed;
console.log(`HyperFrames findings summary: ${passed} passed, ${failed} failed, ${results.length} total`);
console.log(`Generated snippets: ${outputDir}`);
if (failed) process.exit(1);
