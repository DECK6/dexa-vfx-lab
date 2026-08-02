import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R15',
  slug: 'penrose-tile',
  name: 'Penrose Tile',
  category: 'pattern',
  kind: 'canvas',
  cost: 2,
  wave: 9,
  tags: ['pattern', 'penrose', 'aperiodic', 'tiling'],
  params: {
    depth: { type: 'range', min: 3, max: 6, step: 1, default: 5, label: 'DEPTH' },
    growth: { type: 'range', min: 0.5, max: 1.5, step: 0.05, default: 1, label: 'GROWTH' },
    rotation: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.18, label: 'ROTATION' },
    lineWidth: { type: 'range', min: 0.4, max: 2.4, step: 0.1, default: 1, label: 'LINE WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
