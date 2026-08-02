import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R22',
  slug: 'pinwheel-fractal',
  name: 'Pinwheel Fractal',
  category: 'pattern',
  kind: 'canvas',
  cost: 2,
  wave: 9,
  tags: ['pattern', 'pinwheel', 'fractal', 'triangle', 'recursive'],
  params: {
    blades: { type: 'range', min: 3, max: 8, step: 1, default: 5, label: 'BLADES' },
    depth: { type: 'range', min: 2, max: 5, step: 1, default: 4, label: 'DEPTH' },
    twist: { type: 'range', min: 0.1, max: 1, step: 0.01, default: 0.64, label: 'TWIST' },
    weight: { type: 'range', min: 0.5, max: 4, step: 0.1, default: 1.4, label: 'WEIGHT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
