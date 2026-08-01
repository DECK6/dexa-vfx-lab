import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V01',
  slug: 'bar-race',
  name: 'Bar Race',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['data', 'bar', 'chart', 'race'],
  params: {
    bars: { type: 'range', min: 4, max: 9, step: 1, default: 6, label: 'BARS' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    spacing: { type: 'range', min: 0.08, max: 0.35, step: 0.01, default: 0.2, label: 'SPACING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
