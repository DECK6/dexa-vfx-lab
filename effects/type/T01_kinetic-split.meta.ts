import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T01',
  slug: 'kinetic-split',
  name: 'Kinetic Split',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['type', 'stagger', 'kinetic', 'reveal'],
  params: {
    stagger: { type: 'range', min: 0.02, max: 0.14, step: 0.01, default: 0.06, label: 'STAGGER' },
    distance: { type: 'range', min: 0.05, max: 0.5, step: 0.01, default: 0.24, label: 'DISTANCE' },
    slices: { type: 'range', min: 4, max: 10, step: 1, default: 7, label: 'LETTERS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
