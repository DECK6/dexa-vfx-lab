import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V07',
  slug: 'heatmap-fill',
  name: 'Heatmap Fill',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['data', 'heatmap', 'grid', 'fill'],
  params: {
    columns: { type: 'range', min: 6, max: 14, step: 1, default: 10, label: 'COLUMNS' },
    rows: { type: 'range', min: 4, max: 10, step: 1, default: 7, label: 'ROWS' },
    trail: { type: 'range', min: 3, max: 18, step: 1, default: 10, label: 'TRAIL' },
    gap: { type: 'range', min: 2, max: 12, step: 1, default: 6, label: 'GAP' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
