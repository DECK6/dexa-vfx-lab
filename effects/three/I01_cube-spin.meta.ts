import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I01',
  slug: 'cube-spin',
  name: 'Cube Spin',
  category: 'three',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['three', 'cube', 'spin', 'six-face', 'css-3d'],
  params: {
    size: { type: 'range', min: 0.26, max: 0.58, step: 0.01, default: 0.42, label: 'SIZE' },
    perspective: { type: 'range', min: 420, max: 1600, step: 20, default: 880, label: 'PERSPECTIVE' },
    turns: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'TURNS' },
    faceShade: { type: 'range', min: 0.1, max: 0.8, step: 0.01, default: 0.42, label: 'FACE SHADE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
