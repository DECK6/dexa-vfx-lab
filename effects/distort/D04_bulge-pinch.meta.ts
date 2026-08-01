import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D04',
  slug: 'bulge-pinch',
  name: 'Bulge Pinch',
  category: 'distort',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['distort', 'bulge', 'pinch', 'lens', 'webgl'],
  params: {
    amount: { type: 'range', min: -1, max: 1, step: 0.02, default: 0.72, label: 'AMOUNT' },
    radius: { type: 'range', min: 0.18, max: 0.72, step: 0.01, default: 0.42, label: 'RADIUS' },
    travel: { type: 'range', min: 0, max: 0.28, step: 0.01, default: 0.16, label: 'TRAVEL' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
