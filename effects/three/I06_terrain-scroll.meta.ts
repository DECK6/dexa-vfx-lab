import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I06',
  slug: 'terrain-scroll',
  name: 'Terrain Scroll',
  category: 'three',
  kind: 'webgl',
  cost: 2,
  wave: 8,
  tags: ['three', 'terrain', 'wireframe', 'perspective', 'webgl'],
  params: {
    density: { type: 'range', min: 3, max: 12, step: 0.5, default: 7, label: 'DENSITY' },
    relief: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.58, label: 'RELIEF' },
    speed: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'SPEED' },
    thickness: { type: 'range', min: 0.01, max: 0.12, step: 0.005, default: 0.045, label: 'THICKNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
