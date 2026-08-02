import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O26',
  slug: 'cloth-wave',
  name: 'Cloth Wave',
  category: 'motion',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['motion', 'cloth', 'wave', 'flag'],
  params: {
    folds: { type: 'range', min: 2, max: 7, step: 1, default: 4, label: 'FOLDS' },
    amplitude: { type: 'range', min: 0.04, max: 0.24, step: 0.01, default: 0.13, label: 'AMPLITUDE' },
    breeze: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'BREEZE' },
    slices: { type: 'range', min: 10, max: 20, step: 2, default: 16, label: 'SLICES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
