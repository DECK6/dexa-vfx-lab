import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U04',
  slug: 'skeleton-shimmer',
  name: 'Skeleton Shimmer',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['ui', 'skeleton', 'shimmer', 'loading'],
  params: {
    rows: { type: 'range', min: 3, max: 7, step: 1, default: 5, label: 'ROWS' },
    cycles: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'CYCLES' },
    intensity: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.72, label: 'INTENSITY' },
    rounded: { type: 'toggle', default: true, label: 'ROUNDED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
