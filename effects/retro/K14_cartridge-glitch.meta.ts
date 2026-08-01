import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K14',
  slug: 'cartridge-glitch',
  name: 'Cartridge Glitch',
  category: 'retro',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['retro', 'cartridge', 'tile-corruption', 'palette-bank', 'glitch'],
  params: {
    tileSize: { type: 'range', min: 4, max: 24, step: 2, default: 12, label: 'TILE SIZE' },
    corruption: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.58, label: 'CORRUPTION' },
    hold: { type: 'range', min: 2, max: 12, step: 1, default: 6, label: 'FRAME HOLD' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
