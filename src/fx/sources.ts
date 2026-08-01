/**
 * Raw effect-file source loading for the code tab.
 * Vite-only (import.meta.glob) — NEVER import this from src/remotion/**.
 */
const raw = import.meta.glob<string>('../../effects/*/*.effect.{ts,tsx}', {
  query: '?raw',
  import: 'default',
});

export function loadSource(effectPath: string): Promise<string> {
  const loader = raw[`../../${effectPath}`];
  if (!loader) return Promise.reject(new Error(`no source for ${effectPath}`));
  return loader();
}
