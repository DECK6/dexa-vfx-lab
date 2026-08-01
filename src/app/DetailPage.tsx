import { useEffect, useMemo, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { LivePreview, subscribeTransportClock } from '../drivers/live/LivePreview';

declare global {
  interface Window {
    /** Test hook consumed by tests/smoke.spec.ts (SPEC §9). */
    __vfx?: { entryId: string; seek: (f: number) => void; pause: () => void };
  }
}
import { exporters } from '../export';
import { loadSource } from '../fx/sources';
import { allEffects, registry, type FxEntry } from '../fx/registry';
import { defaultParams, type FxParamSpec } from '../fx/types';

const FPS = 30;
const DURATION = 180;

export function DetailPage({ id }: { id: string }) {
  const entry = registry.get(id);
  if (!entry) {
    return (
      <main className="not-found">
        <p className="mono">404 / UNKNOWN EFFECT / {id}</p>
        <a className="action-button mono" href="#/">RETURN TO GALLERY</a>
      </main>
    );
  }
  return <EffectDetail key={entry.meta.id} entry={entry} />;
}

function EffectDetail({ entry }: { entry: FxEntry }) {
  const defaults = useMemo(() => defaultParams(entry.meta.params), [entry.meta.params]);
  const [params, setParams] = useState<Record<string, unknown>>(defaults);
  const [frame, setFrame] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [loop, setLoop] = useState(true);
  const [seekToken, setSeekToken] = useState(0);
  const previousElapsed = useRef<number | null>(null);
  const fractionalFrames = useRef(0);

  useEffect(() => {
    previousElapsed.current = null;
    if (!playing) return;
    return subscribeTransportClock((elapsedMs) => {
      const previous = previousElapsed.current;
      previousElapsed.current = elapsedMs;
      if (previous === null) return;
      fractionalFrames.current += ((elapsedMs - previous) * FPS) / 1000;
      const advance = Math.floor(fractionalFrames.current);
      if (advance < 1) return;
      fractionalFrames.current -= advance;
      setFrame((current) => {
        const next = current + advance;
        if (next < DURATION) return next;
        if (loop) return next % DURATION;
        setPlaying(false);
        return DURATION - 1;
      });
    });
  }, [loop, playing]);

  const related = allEffects
    .filter(({ meta }) => meta.category === entry.meta.category && meta.id !== entry.meta.id)
    .slice(0, 6);

  const seek = (next: number) => {
    setFrame(next);
    setSeekToken((value) => value + 1);
    fractionalFrames.current = 0;
  };

  useEffect(() => {
    window.__vfx = {
      entryId: entry.meta.id,
      seek: (f) =>
        flushSync(() => {
          setPlaying(false);
          seek(f);
        }),
      pause: () => flushSync(() => setPlaying(false)),
    };
    return () => {
      delete window.__vfx;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry.meta.id]);

  return (
    <main className="detail-page">
      <div className="detail-title-row">
        <div>
          <p className="eyebrow mono">{entry.meta.category.toUpperCase()} / {entry.meta.kind.toUpperCase()} / W{entry.meta.wave}</p>
          <h1>{entry.meta.id} / {entry.meta.name}<span>.</span></h1>
        </div>
        <a className="text-link mono" href="#/">← ALL EFFECTS</a>
      </div>

      <section className="detail-workbench">
        <div className="detail-preview-panel">
          <div className="preview-bezel detail-bezel" data-vfx-preview>
            <LivePreview
              entry={entry}
              mode="detail"
              active
              frame={frame}
              fps={FPS}
              durationInFrames={DURATION}
              params={params}
              resetKey={seekToken}
            />
          </div>
          <div className="transport mono">
            <button type="button" onClick={() => setPlaying((value) => !value)}>{playing ? 'PAUSE' : 'PLAY'}</button>
            <button type="button" className={loop ? 'is-active' : ''} onClick={() => setLoop((value) => !value)}>LOOP</button>
            <input
              aria-label="Frame scrubber"
              type="range"
              min="0"
              max={DURATION - 1}
              value={frame}
              onChange={(event) => seek(Number(event.target.value))}
            />
            <output>{String(frame).padStart(3, '0')} / {DURATION}</output>
          </div>
        </div>
        <ParamPanel entry={entry} params={params} setParams={setParams} onReset={() => {
          setParams(defaults);
          setSeekToken((value) => value + 1);
        }} />
      </section>

      <CodePanel entry={entry} params={params} />

      <section className="related-section">
        <div className="section-heading">
          <p className="eyebrow mono">SAME CATEGORY</p>
          <h2>RELATED EFFECTS</h2>
        </div>
        {related.length ? (
          <div className="related-grid">
            {related.map((item) => (
              <a key={item.meta.id} className="related-card mono" href={`#/e/${item.meta.id}`}>
                <span>{item.meta.id}</span>
                <strong>{item.meta.name}</strong>
                <small>{item.meta.kind} / {'●'.repeat(item.meta.cost)}</small>
              </a>
            ))}
          </div>
        ) : <p className="pending-copy mono">RELATED EFFECTS PENDING</p>}
      </section>
    </main>
  );
}

function ParamPanel({
  entry,
  params,
  setParams,
  onReset,
}: {
  entry: FxEntry;
  params: Record<string, unknown>;
  setParams: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
  onReset: () => void;
}) {
  const update = (key: string, value: unknown) => setParams((current) => ({ ...current, [key]: value }));
  return (
    <aside className="param-panel">
      <div className="panel-heading mono">
        <span>PARAMETERS</span>
        <button type="button" onClick={onReset}>RESET</button>
      </div>
      <div className="param-list">
        {Object.entries(entry.meta.params).map(([key, spec]) => (
          <ParamControl key={key} spec={spec} value={params[key]} onChange={(value) => update(key, value)} />
        ))}
        {!Object.keys(entry.meta.params).length && <p className="pending-copy mono">NO PARAMETERS</p>}
      </div>
    </aside>
  );
}

function ParamControl({ spec, value, onChange }: { spec: FxParamSpec; value: unknown; onChange: (value: unknown) => void }) {
  if (spec.type === 'toggle') {
    return (
      <label className="param-control param-toggle mono">
        <span>{spec.label}</span>
        <input data-vfx-param type="checkbox" checked={Boolean(value)} onChange={(event) => onChange(event.target.checked)} />
      </label>
    );
  }
  if (spec.type === 'enum') {
    return (
      <label className="param-control mono">
        <span>{spec.label}</span>
        <select data-vfx-param value={String(value)} onChange={(event) => onChange(event.target.value)}>
          {spec.options.map((option) => <option key={option} value={option}>{option.toUpperCase()}</option>)}
        </select>
      </label>
    );
  }
  if (spec.type === 'color') {
    return (
      <label className="param-control color-control mono">
        <span>{spec.label}</span>
        <span className="color-value">{String(value)}</span>
        <input type="color" value={String(value)} onChange={(event) => onChange(event.target.value)} />
      </label>
    );
  }
  return (
    <label className="param-control mono">
      <span>{spec.label}</span>
      <output>{Number(value).toFixed(2)}</output>
      <input
        data-vfx-param
        type="range"
        min={spec.min}
        max={spec.max}
        step={spec.step}
        value={Number(value)}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function CodePanel({ entry, params }: { entry: FxEntry; params: Record<string, unknown> }) {
  const available = useMemo(() => exporters.filter((exporter) => exporter.applies(entry.meta)), [entry.meta]);
  const [activeId, setActiveId] = useState<string | null>(available[0]?.id ?? null);
  const [kernelSource, setKernelSource] = useState('');
  const [sourceError, setSourceError] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadSource(entry.effectPath).then(
      (source) => {
        if (!cancelled) setKernelSource(source);
      },
      () => {
        if (!cancelled) setSourceError(true);
      },
    );
    return () => {
      cancelled = true;
    };
  }, [entry.effectPath]);

  useEffect(() => {
    if (!activeId || !available.some((exporter) => exporter.id === activeId)) setActiveId(available[0]?.id ?? null);
  }, [activeId, available]);

  const active = available.find((exporter) => exporter.id === activeId);
  let output = '';
  if (active && kernelSource) {
    try {
      output = active.generate({ meta: entry.meta, params, kernelSource });
    } catch {
      output = 'EXPORT GENERATION FAILED';
    }
  } else if (sourceError) {
    output = 'KERNEL SOURCE UNAVAILABLE';
  }

  const copy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section className="code-panel" aria-labelledby="code-heading">
      <div className="section-heading">
        <p className="eyebrow mono">PORTABLE OUTPUT</p>
        <h2 id="code-heading">TAKE THE CODE</h2>
      </div>
      {!available.length ? (
        <div className="code-empty mono">EXPORTERS PENDING</div>
      ) : (
        <div className="code-console">
          <div className="code-tabs mono" role="tablist">
            {available.map((exporter) => (
              <button
                key={exporter.id}
                type="button"
                role="tab"
                aria-selected={activeId === exporter.id}
                className={activeId === exporter.id ? 'is-active' : ''}
                onClick={() => setActiveId(exporter.id)}
              >
                {exporter.label}
              </button>
            ))}
            <button type="button" className="copy-button" onClick={copy}>{copied ? 'COPIED' : 'COPY'}</button>
          </div>
          <pre><code>{output || 'GENERATING…'}</code></pre>
        </div>
      )}
    </section>
  );
}
