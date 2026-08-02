import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R21',
  slug: 'rose-curves',
  name: 'Rose Curves',
  category: 'pattern',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['pattern', 'rose', 'polar', 'curve', 'morph'],
  params: {
    petals: { type: 'range', min: 3, max: 12, step: 1, default: 7, label: 'PETALS' },
    layers: { type: 'range', min: 2, max: 7, step: 1, default: 4, label: 'LAYERS' },
    morph: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'MORPH' },
    weight: { type: 'range', min: 0.8, max: 5, step: 0.1, default: 2.2, label: 'WEIGHT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
