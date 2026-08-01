import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N11',
  slug: 'crystal-grow',
  name: 'Crystal Grow',
  category: 'nature',
  kind: 'canvas',
  cost: 2,
  wave: 4,
  tags: ['nature', 'crystal', 'growth', 'dla'],
  stateful: true,
  params: {
    growth: { type: 'range', min: 0.4, max: 2, step: 0.05, default: 1, label: 'GROWTH' },
    branching: { type: 'range', min: 0.05, max: 0.55, step: 0.01, default: 0.24, label: 'BRANCHING' },
    spread: { type: 'range', min: 0.08, max: 0.7, step: 0.01, default: 0.34, label: 'SPREAD' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
