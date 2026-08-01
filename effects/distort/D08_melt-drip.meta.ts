import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D08',
  slug: 'melt-drip',
  name: 'Melt Drip',
  category: 'distort',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['distort', 'melt', 'drip', 'liquid', 'webgl'],
  params: {
    amount: { type: 'range', min: 0, max: 0.32, step: 0.005, default: 0.19, label: 'AMOUNT' },
    scale: { type: 'range', min: 4, max: 18, step: 0.5, default: 10, label: 'SCALE' },
    viscosity: { type: 'range', min: 0.25, max: 1, step: 0.05, default: 0.68, label: 'VISCOSITY' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
