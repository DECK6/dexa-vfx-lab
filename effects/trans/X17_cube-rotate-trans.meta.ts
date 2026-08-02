import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X17', slug: 'cube-rotate-trans', name: 'Cube Rotate Trans', category: 'trans', kind: 'react', cost: 2, wave: 9,
  tags: ['transition', 'cube', '3d', 'rotate', 'face'],
  params: {
    depth: { type: 'range', min: 80, max: 280, step: 10, default: 180, label: 'DEPTH' },
    tilt: { type: 'range', min: -18, max: 18, step: 1, default: -7, label: 'TILT' },
    turns: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'TURNS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
