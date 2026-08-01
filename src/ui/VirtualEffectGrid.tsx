import { useEffect, useMemo, useRef, useState } from 'react';
import type { FxEntry } from '../fx/registry';
import { LivePreview, useGalleryActivation } from '../drivers/live/LivePreview';

const CARD_MIN_WIDTH = 260;
const ROW_HEIGHT = 254;
const OVERSCAN_ROWS = 2;

export function VirtualEffectGrid({ entries }: { entries: FxEntry[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(900);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const resize = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    resize.observe(viewport);
    return () => resize.disconnect();
  }, []);

  useEffect(() => {
    if (viewportRef.current) viewportRef.current.scrollTop = 0;
    setScrollTop(0);
  }, [entries]);

  const columns = Math.max(1, Math.floor((width + 16) / (CARD_MIN_WIDTH + 16)));
  const rowCount = Math.ceil(entries.length / columns);
  const viewportHeight = viewportRef.current?.clientHeight ?? 600;
  const startRow = Math.min(
    Math.max(0, rowCount - 1),
    Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN_ROWS),
  );
  const endRow = Math.min(rowCount, Math.ceil((scrollTop + viewportHeight) / ROW_HEIGHT) + OVERSCAN_ROWS);
  const visible = useMemo(
    () => entries.slice(startRow * columns, Math.min(entries.length, endRow * columns)),
    [columns, endRow, entries, startRow],
  );

  return (
    <div className="grid-viewport" ref={viewportRef} onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}>
      <div className="grid-spacer" style={{ height: rowCount * ROW_HEIGHT }}>
        <div
          className="effect-grid"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            transform: `translateY(${startRow * ROW_HEIGHT}px)`,
          }}
        >
          {visible.map((entry) => <EffectCard key={entry.meta.id} entry={entry} />)}
        </div>
      </div>
    </div>
  );
}

function EffectCard({ entry }: { entry: FxEntry }) {
  const { active, ref } = useGalleryActivation(entry);
  const kindLabel = entry.meta.kind === 'canvas' ? 'CV' : entry.meta.kind === 'react' ? 'RX' : 'GL';
  return (
    <article ref={ref} className="effect-card">
      <a href={`#/e/${encodeURIComponent(entry.meta.id)}`} aria-label={`${entry.meta.id} ${entry.meta.name}`}>
        <div className="preview-bezel"><LivePreview entry={entry} active={active} /></div>
        <p className="effect-label mono">
          {entry.meta.id} / {entry.meta.name.toUpperCase()} / {kindLabel} / {'●'.repeat(entry.meta.cost)}
        </p>
      </a>
    </article>
  );
}
