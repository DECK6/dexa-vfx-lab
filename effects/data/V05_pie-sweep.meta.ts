import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V05',
  slug: 'pie-sweep',
  name: 'Pie Sweep',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['data', 'pie', 'chart', 'sweep'],
  params: {
    segments: { type: 'range', min: 3, max: 8, step: 1, default: 5, label: 'SEGMENTS' },
    hole: { type: 'range', min: 0, max: 0.7, step: 0.01, default: 0.32, label: 'HOLE' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
