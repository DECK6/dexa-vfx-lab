import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K02',
  slug: 'bayer-dither',
  name: 'Bayer Dither',
  category: 'retro',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['retro', 'dither', 'bayer', 'ordered', 'webgl'],
  params: {
    cellSize: { type: 'range', min: 1, max: 6, step: 1, default: 2, label: 'CELL SIZE' },
    levels: { type: 'range', min: 2, max: 5, step: 1, default: 3, label: 'COLOR LEVELS' },
    amount: { type: 'range', min: 0.2, max: 1, step: 0.05, default: 0.85, label: 'DITHER AMOUNT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
