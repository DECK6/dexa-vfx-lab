import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O14',
  slug: 'rubber-band',
  name: 'Rubber Band',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['physics', 'elastic', 'tension', 'release'],
  params: {
    pull: { type: 'range', min: 0.08, max: 0.36, step: 0.01, default: 0.24, label: 'PULL' },
    tension: { type: 'range', min: 0.8, max: 4.5, step: 0.1, default: 2.2, label: 'TENSION' },
    elasticity: { type: 'range', min: 0.4, max: 3, step: 0.05, default: 1.15, label: 'ELASTICITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
