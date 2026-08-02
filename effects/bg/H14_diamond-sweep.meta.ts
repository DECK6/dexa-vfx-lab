import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H14',
  slug: 'diamond-sweep',
  name: 'Diamond Sweep',
  category: 'bg',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['background', 'diamond', 'tile', 'specular', 'react'],
  params: {
    tile: { type: 'range', min: 28, max: 72, step: 2, default: 46, label: 'TILE' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'SPEED' },
    gloss: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.68, label: 'GLOSS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
