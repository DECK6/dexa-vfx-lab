#!/usr/bin/env node
/** Reject exact or suspiciously near-duplicate effect implementations. */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { basename, join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const EFFECTS = join(ROOT, 'effects');
const STOP = new Set([
  'effect', 'react', 'canvas', 'webgl', 'shape', 'texture', 'camera', 'transition', 'trans',
  'background', 'signal', 'kernel', 'params', 'const', 'number', 'string', 'position', 'absolute',
  'width', 'height', 'style', 'math', 'ctx', 'return', 'default', 'import', 'type', 'from', 'kind',
]);

function words(value) {
  return value.toLowerCase().match(/[a-z][a-z0-9]+/g)?.filter((word) => word.length > 2 && !STOP.has(word)) ?? [];
}

function shingles(tokens, size = 4) {
  const out = new Set();
  for (let index = 0; index <= tokens.length - size; index += 1) out.add(tokens.slice(index, index + size).join(' '));
  return out;
}

function jaccard(left, right) {
  if (left.size === 0 || right.size === 0) return 0;
  let intersection = 0;
  for (const item of left) if (right.has(item)) intersection += 1;
  return intersection / (left.size + right.size - intersection);
}

function normalizeExact(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')
    .replace(/^import .*$/gm, '')
    .replace(/\s+/g, '');
}

const effects = [];
for (const category of readdirSync(EFFECTS).sort()) {
  const dir = join(EFFECTS, category);
  if (!statSync(dir).isDirectory()) continue;
  for (const file of readdirSync(dir).filter((name) => /\.effect\.tsx?$/.test(name)).sort()) {
    const path = join(dir, file);
    const id = basename(file).match(/^([A-Z]\d{2})_/)?.[1];
    const slug = basename(file).replace(/^[A-Z]\d{2}_/, '').replace(/\.effect\.tsx?$/, '');
    const metaPath = path.replace(/\.effect\.tsx?$/, '.meta.ts');
    const source = readFileSync(path, 'utf8');
    const meta = readFileSync(metaPath, 'utf8');
    const name = meta.match(/name:\s*['"]([^'"]+)/)?.[1] ?? slug;
    const tagText = meta.match(/tags:\s*\[([^\]]*)\]/)?.[1] ?? '';
    const semantic = new Set(words(`${slug} ${name} ${tagText}`));
    const sourceTokens = words(source.replace(/^import .*$/gm, '').replace(/['"][A-Z]\d{2}['"]/g, ''));
    effects.push({ id, category, path, exact: normalizeExact(source), semantic, source: shingles(sourceTokens) });
  }
}

if (process.argv.includes('--selftest')) {
  const sample = shingles(words('deterministic particle burst ballistic gravity deterministic particle burst ballistic gravity'));
  if (jaccard(sample, sample) !== 1) throw new Error('neighbor similarity selftest failed');
  console.log('lint:neighbors selftest — OK');
  process.exit(0);
}

const errors = [];
let compared = 0;
for (let leftIndex = 0; leftIndex < effects.length; leftIndex += 1) {
  for (let rightIndex = leftIndex + 1; rightIndex < effects.length; rightIndex += 1) {
    const left = effects[leftIndex];
    const right = effects[rightIndex];
    const semanticScore = jaccard(left.semantic, right.semantic);
    if (left.category !== right.category && semanticScore < 0.34) continue;
    compared += 1;
    if (left.exact === right.exact) {
      errors.push(`${left.id}/${right.id}: exact normalized kernel duplicate`);
      continue;
    }
    const sourceScore = jaccard(left.source, right.source);
    if (sourceScore >= 0.9 || (semanticScore >= 0.67 && sourceScore >= 0.72)) {
      errors.push(`${left.id}/${right.id}: near duplicate (semantic=${semanticScore.toFixed(2)}, source=${sourceScore.toFixed(2)})`);
    }
  }
}

if (errors.length) {
  console.error(`lint:neighbors — ${errors.length} suspicious pair(s):`);
  for (const error of errors) console.error(`  ✗ ${error}`);
  process.exit(1);
}

console.log(`lint:neighbors — OK (${effects.length} effects, ${compared} relevant pairs compared)`);
