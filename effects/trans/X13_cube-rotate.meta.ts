import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X13',
  slug: 'cube-rotate',
  name: 'Cube Rotate',
  category: 'trans',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['transition', 'cube', '3d'],
  params: {
    direction: { type: 'enum', options: ['left', 'right', 'up', 'down'], default: 'left', label: 'DIRECTION' },
    perspective: { type: 'range', min: 400, max: 1600, step: 50, default: 900, label: 'PERSPECTIVE' },
    shading: { type: 'range', min: 0, max: 0.75, step: 0.05, default: 0.4, label: 'SHADING' },
    edge: { type: 'toggle', default: true, label: 'EDGE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
