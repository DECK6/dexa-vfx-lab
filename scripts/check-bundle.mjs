#!/usr/bin/env node
import { readFileSync, statSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DIST = join(ROOT, 'dist');
const html = readFileSync(join(DIST, 'index.html'), 'utf8');
const entryMatch = html.match(/<script[^>]+src="\/vfx\/assets\/(index-[^"]+\.js)"/);
if (!entryMatch) {
  console.error('check:bundle — could not resolve the entry script from dist/index.html');
  process.exit(1);
}

const entryPath = join(DIST, 'assets', entryMatch[1]);
const entryBytes = statSync(entryPath).size;
const audit = JSON.parse(readFileSync(join(DIST, 'bundle-audit.json'), 'utf8'));
const remotionLeak = audit.remotionModules.length > 0;
const distBytes = readdirSync(join(DIST, 'assets')).reduce((sum, file) => sum + statSync(join(DIST, 'assets', file)).size, 0);
const errors = [];
if (entryBytes >= 500_000) errors.push(`entry ${entryBytes} bytes; budget is <500000`);
if (remotionLeak) errors.push('Remotion runtime signature found in gallery entry');

if (errors.length) {
  console.error(`check:bundle — ${errors.length} error(s):`);
  for (const error of errors) console.error(`  ✗ ${error}`);
  process.exit(1);
}

console.log(`check:bundle — OK (entry ${entryBytes} bytes, Remotion leak 0, assets ${distBytes} bytes)`);
