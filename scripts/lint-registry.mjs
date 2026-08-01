#!/usr/bin/env node
/**
 * Registry lint (SPEC §4). Fails the build on:
 *  - duplicate effect IDs
 *  - meta/effect file pair mismatch
 *  - framework imports inside effects/ (remotion, @remotion/*, hyperframes, react-dom)
 *  - Math.random / Date.now / new Date() inside effects/
 *  - meta filename not matching ID_slug convention
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const EFFECTS = join(ROOT, 'effects');
const errors = [];

if (!existsSync(EFFECTS)) {
  console.log('lint:registry — effects/ not present yet, nothing to lint');
  process.exit(0);
}

const ids = new Map();

for (const cat of readdirSync(EFFECTS)) {
  const catDir = join(EFFECTS, cat);
  if (!statSync(catDir).isDirectory()) continue;
  for (const file of readdirSync(catDir)) {
    const path = join(catDir, file);
    if (file.endsWith('.meta.ts')) {
      const m = file.match(/^([A-Z]\d{2})_([a-z0-9-]+)\.meta\.ts$/);
      if (!m) {
        errors.push(`naming: ${cat}/${file} does not match <ID>_<slug>.meta.ts`);
        continue;
      }
      const [, id] = m;
      if (ids.has(id)) errors.push(`duplicate id ${id}: ${cat}/${file} vs ${ids.get(id)}`);
      ids.set(id, `${cat}/${file}`);
      const base = path.replace(/\.meta\.ts$/, '');
      if (!existsSync(`${base}.effect.ts`) && !existsSync(`${base}.effect.tsx`)) {
        errors.push(`pair: ${cat}/${file} has no matching .effect.ts(x)`);
      }
      const metaSrc = readFileSync(path, 'utf8');
      if (!metaSrc.includes(`id: '${id}'`) && !metaSrc.includes(`id: "${id}"`)) {
        errors.push(`meta id mismatch: ${cat}/${file} must declare id '${id}'`);
      }
    }
    if (/\.effect\.tsx?$/.test(file)) {
      const src = readFileSync(path, 'utf8');
      for (const [re, msg] of [
        [/from\s+['"](remotion|@remotion\/|hyperframes|react-dom)/, 'framework import'],
        [/Math\.random\s*\(/, 'Math.random'],
        [/Date\.now\s*\(/, 'Date.now'],
        [/new\s+Date\s*\(\s*\)/, 'new Date()'],
      ]) {
        if (re.test(src)) errors.push(`${msg} in ${cat}/${file}`);
      }
    }
  }
}

if (errors.length) {
  console.error(`lint:registry — ${errors.length} error(s):`);
  for (const e of errors) console.error('  ✗ ' + e);
  process.exit(1);
}
console.log(`lint:registry — OK (${ids.size} effects)`);
