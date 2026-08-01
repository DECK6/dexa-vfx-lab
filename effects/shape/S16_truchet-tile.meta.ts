import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S16',
  slug: 'truchet-tile',
  name: 'Truchet Tile',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 4,
  tags: ['shape', 'truchet', 'tile', 'pattern'],
  params: {
    grid: { type: 'range', min: 5, max: 11, step: 1, default: 8, label: 'GRID' },
    weight: { type: 'range', min: 3, max: 16, step: 1, default: 8, label: 'WEIGHT' },
    stagger: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.58, label: 'STAGGER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
