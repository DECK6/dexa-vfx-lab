import type { Dispatch, SetStateAction } from 'react';
import type { FxCategory } from '../categories';
import type { FxKind } from '../fx/types';
import type { FilterState } from '../app/GalleryPage';

interface GalleryFiltersProps {
  categories: FxCategory[];
  value: FilterState;
  onChange: Dispatch<SetStateAction<FilterState>>;
  onReset: () => void;
}

function toggleSet<T>(source: Set<T>, item: T) {
  const next = new Set(source);
  if (next.has(item)) next.delete(item);
  else next.add(item);
  return next;
}

export function GalleryFilters({ categories, value, onChange, onReset }: GalleryFiltersProps) {
  const update = <K extends keyof FilterState>(key: K, item: FilterState[K] extends Set<infer T> ? T : never) => {
    onChange((current) => ({ ...current, [key]: toggleSet(current[key] as Set<typeof item>, item) }));
  };

  return (
    <aside className="filters mono" aria-label="Effect filters">
      <div className="filter-heading">
        <span>FILTER MATRIX</span>
        <button type="button" onClick={onReset}>CLEAR</button>
      </div>
      <fieldset>
        <legend>CATEGORY</legend>
        <div className="filter-options filter-columns">
          {categories.map((category) => (
            <FilterChoice
              key={category.key}
              label={category.label}
              checked={value.categories.has(category.key)}
              onChange={() => update('categories', category.key)}
            />
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>KIND</legend>
        <div className="filter-options">
          {(['react', 'canvas', 'webgl'] satisfies FxKind[]).map((kind) => (
            <FilterChoice key={kind} label={kind} checked={value.kinds.has(kind)} onChange={() => update('kinds', kind)} />
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>COST</legend>
        <div className="filter-options">
          {[1, 2, 3].map((cost) => (
            <FilterChoice key={cost} label={'●'.repeat(cost)} checked={value.costs.has(cost)} onChange={() => update('costs', cost)} />
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>WAVE</legend>
        <div className="filter-options">
          {[1, 2, 3, 4, 5].map((wave) => (
            <FilterChoice key={wave} label={`W${wave}`} checked={value.waves.has(wave)} onChange={() => update('waves', wave)} />
          ))}
        </div>
      </fieldset>
    </aside>
  );
}

function FilterChoice({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className={checked ? 'filter-choice is-active' : 'filter-choice'}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label.toUpperCase()}</span>
    </label>
  );
}

