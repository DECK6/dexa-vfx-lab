import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X20', slug: 'pixel-melt', name: 'Pixel Melt', category: 'trans', kind: 'canvas', cost: 2, wave: 9,
  tags: ['transition', 'pixel', 'melt', 'columns', 'canvas'],
  params: {
    columns: { type: 'range', min: 12, max: 48, step: 2, default: 28, label: 'COLUMNS' },
    drop: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.72, label: 'DROP' },
    blocks: { type: 'range', min: 2, max: 10, step: 1, default: 6, label: 'BLOCKS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
