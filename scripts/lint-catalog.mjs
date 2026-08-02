#!/usr/bin/env node
/**
 * 500-effect completion gate.
 * Cross-checks docs/CATALOG.md against effect meta/effect pairs and wave declarations.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { basename, join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const EFFECTS = join(ROOT, 'effects');
const CATALOG = join(ROOT, 'docs/CATALOG.md');
const EXPECTED_TOTAL = 500;
const errors = [];
const GENERATED_MANIFEST = join(ROOT, 'src/fx/manifest.gen.ts');

const files = [];
for (const category of readdirSync(EFFECTS).sort()) {
  const dir = join(EFFECTS, category);
  if (!statSync(dir).isDirectory()) continue;
  for (const file of readdirSync(dir).sort()) files.push(join(dir, file));
}

const metaFiles = files.filter((file) => file.endsWith('.meta.ts'));
const effectFiles = files.filter((file) => /\.effect\.tsx?$/.test(file));
const idFromFile = (file) => basename(file).match(/^([A-Z]\d{2})_/)?.[1];
const metaById = new Map(metaFiles.map((file) => [idFromFile(file), file]));
const effectById = new Map(effectFiles.map((file) => [idFromFile(file), file]));

const catalogById = new Map();
for (const line of readFileSync(CATALOG, 'utf8').split(/\r?\n/)) {
  const row = line.match(/^\| ([A-Z]\d{2}) \|.*\| W([1-9]) \|$/);
  if (!row) continue;
  if (catalogById.has(row[1])) errors.push(`duplicate catalog ID ${row[1]}`);
  catalogById.set(row[1], Number(row[2]));
}

if (metaFiles.length !== EXPECTED_TOTAL) {
  errors.push(`effect count ${metaFiles.length}; expected ${EXPECTED_TOTAL}`);
}
if (effectFiles.length !== metaFiles.length) {
  errors.push(`pair count mismatch: ${metaFiles.length} meta vs ${effectFiles.length} effect`);
}
if (catalogById.size !== EXPECTED_TOTAL) {
  errors.push(`catalog count ${catalogById.size}; expected ${EXPECTED_TOTAL}`);
}

for (const [id, wave] of catalogById) {
  const metaFile = metaById.get(id);
  if (!metaFile) {
    errors.push(`catalog ${id} (W${wave}) has no meta/effect pair`);
    continue;
  }
  if (!effectById.has(id)) errors.push(`${id} has no effect implementation`);
  const metaSource = readFileSync(metaFile, 'utf8');
  if (!new RegExp(`wave:\\s*${wave}\\b`).test(metaSource)) {
    errors.push(`${id} catalog W${wave} does not match meta wave`);
  }
}

for (const id of metaById.keys()) {
  if (!catalogById.has(id)) errors.push(`${id} is implemented but missing from CATALOG.md`);
}

const generatedManifest = readFileSync(GENERATED_MANIFEST, 'utf8');
if (/import meta_[A-Z]\d{2}/.test(generatedManifest)) {
  errors.push('generated manifest eagerly imports per-effect meta modules; inline metadata to protect the entry budget');
}

if (errors.length) {
  console.error(`lint:catalog — ${errors.length} error(s):`);
  for (const error of errors) console.error(`  ✗ ${error}`);
  process.exit(1);
}

console.log(`lint:catalog — OK (${EXPECTED_TOTAL}/${EXPECTED_TOTAL} catalogued implementations)`);
