import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V24',
  slug: 'waterfall',
  name: 'Waterfall',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['data', 'waterfall', 'delta', 'cumulative'],
  params: {
    steps: { type: 'range', min: 5, max: 10, step: 1, default: 7, label: 'STEPS' },
    swing: { type: 'range', min: 0.35, max: 1, step: 0.01, default: 0.72, label: 'SWING' },
    spacing: { type: 'range', min: 0.08, max: 0.28, step: 0.01, default: 0.16, label: 'SPACING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
