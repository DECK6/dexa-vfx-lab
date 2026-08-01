import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O12',
  slug: 'gravity-toss',
  name: 'Gravity Toss',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['physics', 'gravity', 'bounce', 'spin'],
  params: {
    height: { type: 'range', min: 0.15, max: 0.55, step: 0.01, default: 0.38, label: 'HEIGHT' },
    spin: { type: 'range', min: 0, max: 3, step: 0.25, default: 1, label: 'SPIN' },
    bounce: { type: 'range', min: 0.3, max: 0.68, step: 0.01, default: 0.5, label: 'BOUNCE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
