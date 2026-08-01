import type { FxKernel, FxMeta } from './types';

/**
 * Effect registry (SPEC §4).
 * - meta:   eager  — gallery renders the full list without loading kernel code
 * - kernel: lazy   — chunk loads when a card activates / detail opens
 * - source: lazy raw — code tab shows the actual effect file
 *
 * File convention: effects/<category>/<ID>_<slug>.meta.ts + .effect.ts(x)
 */

const metaModules = import.meta.glob<{ default: FxMeta }>('../../effects/*/*.meta.ts', {
  eager: true,
});

const kernelLoaders = import.meta.glob<{ default: FxKernel }>('../../effects/*/*.effect.{ts,tsx}');

const sourceLoaders = import.meta.glob<string>('../../effects/*/*.effect.{ts,tsx}', {
  query: '?raw',
  import: 'default',
});

function effectPathOf(metaPath: string): string | undefined {
  const base = metaPath.replace(/\.meta\.ts$/, '');
  return [`${base}.effect.ts`, `${base}.effect.tsx`].find((p) => p in kernelLoaders);
}

export interface FxEntry {
  meta: FxMeta;
  loadKernel: () => Promise<FxKernel>;
  loadSource: () => Promise<string>;
}

const entries = new Map<string, FxEntry>();

for (const [metaPath, mod] of Object.entries(metaModules)) {
  const meta = mod.default;
  const effectPath = effectPathOf(metaPath);
  if (!effectPath) {
    // Pair mismatch is also caught by scripts/lint-registry.mjs at build time.
    console.error(`[registry] missing effect file for ${metaPath}`);
    continue;
  }
  if (entries.has(meta.id)) {
    console.error(`[registry] duplicate effect id ${meta.id}`);
    continue;
  }
  entries.set(meta.id, {
    meta,
    loadKernel: () => kernelLoaders[effectPath]().then((m) => m.default),
    loadSource: () => sourceLoaders[effectPath]() as Promise<string>,
  });
}

export const registry: ReadonlyMap<string, FxEntry> = entries;

export const allEffects: FxEntry[] = [...entries.values()].sort((a, b) =>
  a.meta.id.localeCompare(b.meta.id),
);
