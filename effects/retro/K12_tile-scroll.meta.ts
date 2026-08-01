import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K12',
  slug: 'tile-scroll',
  name: 'Tile Scroll',
  category: 'retro',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['retro', 'tilemap', 'parallax', 'side-scroll'],
  params: {
    tileSize: { type: 'range', min: 16, max: 48, step: 1, default: 28, label: 'TILE SIZE' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    depth: { type: 'range', min: 0.4, max: 1, step: 0.05, default: 0.8, label: 'DEPTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
