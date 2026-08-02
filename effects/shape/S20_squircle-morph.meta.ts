import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S20',
  slug: 'squircle-morph',
  name: 'Squircle Morph',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['shape', 'squircle', 'superellipse', 'morph', 'grid'],
  params: {
    grid: { type: 'range', min: 2, max: 6, step: 1, default: 4, label: 'GRID' },
    squareness: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.78, label: 'SQUARENESS' },
    gap: { type: 'range', min: 8, max: 48, step: 1, default: 24, label: 'GAP' },
    weight: { type: 'range', min: 1, max: 7, step: 0.5, default: 3, label: 'WEIGHT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
