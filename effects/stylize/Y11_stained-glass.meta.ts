import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y11',
  slug: 'stained-glass',
  name: 'Stained Glass',
  category: 'stylize',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['stylize', 'stained-glass', 'voronoi', 'lead', 'canvas'],
  params: {
    cells: { type: 'range', min: 14, max: 34, step: 1, default: 23, label: 'CELLS' },
    lead: { type: 'range', min: 1.5, max: 7, step: 0.5, default: 3.5, label: 'LEAD WIDTH' },
    transmission: { type: 'range', min: 0.2, max: 1, step: 0.05, default: 0.72, label: 'TRANSMISSION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
