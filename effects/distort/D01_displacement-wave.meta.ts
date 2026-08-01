import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D01',
  slug: 'displacement-wave',
  name: 'Displacement Wave',
  category: 'distort',
  kind: 'webgl',
  cost: 2,
  wave: 2,
  tags: ['distort', 'displacement', 'wave', 'noise', 'webgl'],
  params: {
    strength: { type: 'range', min: 0, max: 0.2, step: 0.005, default: 0.075, label: 'STRENGTH' },
    scale: { type: 'range', min: 1, max: 12, step: 0.1, default: 5.2, label: 'SCALE' },
    speed: { type: 'range', min: 0, max: 4, step: 0.05, default: 1.25, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
