import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K07',
  slug: 'bit-rain',
  name: 'Bit Rain',
  category: 'retro',
  kind: 'canvas',
  cost: 1,
  wave: 6,
  tags: ['retro', '8-bit', 'rain', 'binary'],
  params: {
    columns: { type: 'range', min: 8, max: 36, step: 1, default: 22, label: 'COLUMNS' },
    speed: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'SPEED' },
    trail: { type: 'range', min: 3, max: 12, step: 1, default: 7, label: 'TRAIL' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
