import { useMemo, useState } from 'react';
import { categories } from '../categories';
import { allEffects } from '../fx/registry';
import type { FxKind } from '../fx/types';
import { GalleryFilters } from '../ui/GalleryFilters';
import { VirtualEffectGrid } from '../ui/VirtualEffectGrid';

export interface FilterState {
  categories: Set<string>;
  kinds: Set<FxKind>;
}

const EMPTY_FILTERS: FilterState = {
  categories: new Set(),
  kinds: new Set(),
};

export function GalleryPage() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>(EMPTY_FILTERS);
  const visibleEffects = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    return allEffects.filter(({ meta }) => {
      if (filters.categories.size && !filters.categories.has(meta.category)) return false;
      if (filters.kinds.size && !filters.kinds.has(meta.kind)) return false;
      if (!needle) return true;
      return [meta.id, meta.name, ...meta.tags].some((value) => value.toLocaleLowerCase().includes(needle));
    });
  }, [filters, query]);

  return (
    <main className="gallery-layout">
      <GalleryFilters
        categories={categories}
        value={filters}
        onChange={setFilters}
        onReset={() => setFilters(EMPTY_FILTERS)}
      />
      <section className="gallery-content" aria-labelledby="gallery-title">
        <div className="gallery-toolbar">
          <div>
            <p className="eyebrow mono">FRAMEWORK-NEUTRAL MOTION CATALOG</p>
            <h1 id="gallery-title">LIVE EFFECTS<span>.</span></h1>
          </div>
          <label className="search-field mono">
            <span>SEARCH</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="ID / NAME / TAG"
            />
          </label>
          <p className="result-count mono">{visibleEffects.length} / {allEffects.length}</p>
        </div>
        {visibleEffects.length ? (
          <VirtualEffectGrid entries={visibleEffects} />
        ) : (
          <div className="empty-state">
            <p className="mono">NO EFFECTS ON SIGNAL</p>
            <span>{allEffects.length ? '필터나 검색어를 조정하세요.' : 'EFFECT KERNELS PENDING — THE SHELL IS READY.'}</span>
          </div>
        )}
      </section>
    </main>
  );
}
