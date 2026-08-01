import type { FxKernel, FxMeta } from './types';
import { manifest } from './manifest.gen';

/**
 * Effect registry (SPEC §4), built from the generated manifest so it works in
 * both Vite (web app) and Remotion's webpack bundler.
 * - meta:   eager  — gallery renders the full list without kernel code
 * - kernel: lazy   — chunk loads when a card activates / detail opens
 * - source: web-app only, via src/fx/sources.ts (Vite ?raw) keyed by entry.effectPath
 */
export interface FxEntry {
  meta: FxMeta;
  effectPath: string;
  loadKernel: () => Promise<FxKernel>;
}

const entries = new Map<string, FxEntry>();

for (const m of manifest) {
  if (entries.has(m.meta.id)) {
    console.error(`[registry] duplicate effect id ${m.meta.id}`);
    continue;
  }
  entries.set(m.meta.id, {
    meta: m.meta,
    effectPath: m.effectPath,
    loadKernel: () => m.load().then((mod) => mod.default),
  });
}

export const registry: ReadonlyMap<string, FxEntry> = entries;

export const allEffects: FxEntry[] = [...entries.values()].sort((a, b) =>
  a.meta.id.localeCompare(b.meta.id),
);
