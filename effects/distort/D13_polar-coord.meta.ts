import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D13',
  slug: 'polar-coord',
  name: 'Polar Coord',
  category: 'distort',
  kind: 'webgl',
  cost: 2,
  wave: 4,
  tags: ['distort', 'polar', 'coordinates', 'radial', 'webgl'],
  params: {
    amount: { type: 'range', min: 0.2, max: 1, step: 0.05, default: 0.9, label: 'AMOUNT' },
    turns: { type: 'range', min: 0.5, max: 2.5, step: 0.05, default: 1, label: 'TURNS' },
    radius: { type: 'range', min: 0.55, max: 1.2, step: 0.05, default: 0.9, label: 'RADIUS' },
    speed: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
