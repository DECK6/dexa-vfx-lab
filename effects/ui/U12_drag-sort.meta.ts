import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U12',
  slug: 'drag-sort',
  name: 'Drag Sort',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 4,
  tags: ['ui', 'drag', 'sort', 'reorder'],
  params: {
    distance: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'DISTANCE' },
    lift: { type: 'range', min: 0.4, max: 1.5, step: 0.05, default: 1, label: 'LIFT' },
    handle: { type: 'enum', options: ['dots', 'bars'], default: 'dots', label: 'HANDLE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
