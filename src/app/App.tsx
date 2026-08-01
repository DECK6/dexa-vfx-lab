import { allEffects } from '../fx/registry';

/** Placeholder shell — replaced by Track A (gallery/detail/about + hash routing). */
export function App() {
  return (
    <main style={{ padding: 40 }}>
      <h1>
        DEXA VFX LAB<span style={{ color: 'var(--orange)' }}>.</span>
      </h1>
      <p className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>
        {allEffects.length} EFFECTS REGISTERED
      </p>
    </main>
  );
}
