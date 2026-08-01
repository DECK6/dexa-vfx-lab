import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V10',
  slug: 'stacked-grow',
  name: 'Stacked Grow',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['data', 'bar', 'stack', 'growth'],
  params: {
    segments: { type: 'range', min: 3, max: 7, step: 1, default: 5, label: 'SEGMENTS' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    spread: { type: 'range', min: 0.3, max: 1, step: 0.01, default: 0.72, label: 'SPREAD' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
