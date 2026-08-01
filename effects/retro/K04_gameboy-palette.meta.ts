import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K04',
  slug: 'gameboy-palette',
  name: 'Gameboy Palette',
  category: 'retro',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['retro', 'gameboy', 'dmg', 'green', 'webgl'],
  params: {
    dotSize: { type: 'range', min: 2, max: 7, step: 1, default: 4, label: 'DOT SIZE' },
    contrast: { type: 'range', min: 0.7, max: 1.8, step: 0.05, default: 1.25, label: 'CONTRAST' },
    ghost: { type: 'range', min: 0, max: 0.8, step: 0.05, default: 0.32, label: 'LCD GHOST' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
