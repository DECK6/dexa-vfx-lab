import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N08',
  slug: 'lightning-storm',
  name: 'Lightning Storm',
  category: 'nature',
  kind: 'canvas',
  cost: 2,
  wave: 4,
  tags: ['nature', 'lightning', 'storm', 'branching'],
  params: {
    intensity: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.82, label: 'INTENSITY' },
    branches: { type: 'range', min: 1, max: 6, step: 1, default: 4, label: 'BRANCHES' },
    frequency: { type: 'range', min: 2, max: 8, step: 1, default: 5, label: 'STRIKES' },
    width: { type: 'range', min: 1, max: 5, step: 0.1, default: 2.2, label: 'BOLT WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
