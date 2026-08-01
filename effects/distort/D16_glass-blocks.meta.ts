import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D16',
  slug: 'glass-blocks',
  name: 'Glass Blocks',
  category: 'distort',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['distort', 'glass', 'blocks', 'tiles', 'refraction', 'webgl'],
  params: {
    columns: { type: 'range', min: 4, max: 14, step: 1, default: 8, label: 'COLUMNS' },
    refraction: { type: 'range', min: 0.01, max: 0.16, step: 0.005, default: 0.075, label: 'REFRACTION' },
    bevel: { type: 'range', min: 0.04, max: 0.22, step: 0.01, default: 0.12, label: 'BEVEL' },
    shimmer: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SHIMMER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
