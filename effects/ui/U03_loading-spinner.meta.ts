import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U03',
  slug: 'loading-spinner',
  name: 'Loading Spinner',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['ui', 'loading', 'spinner', 'progress'],
  params: {
    count: { type: 'range', min: 6, max: 14, step: 1, default: 10, label: 'ELEMENTS' },
    cycles: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'CYCLES' },
    size: { type: 'range', min: 0.65, max: 1.25, step: 0.01, default: 0.92, label: 'SIZE' },
    trail: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.76, label: 'TRAIL' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
