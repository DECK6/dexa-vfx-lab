import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P15',
  slug: 'fireflies',
  name: 'Fireflies',
  category: 'particle',
  kind: 'canvas',
  cost: 1,
  wave: 6,
  tags: ['particle', 'firefly', 'bioluminescent', 'trail'],
  params: {
    count: { type: 'range', min: 10, max: 48, step: 1, default: 26, label: 'COUNT' },
    wander: { type: 'range', min: 0.3, max: 1.4, step: 0.05, default: 0.82, label: 'WANDER' },
    glow: { type: 'range', min: 2, max: 12, step: 0.5, default: 7, label: 'GLOW' },
    trail: { type: 'range', min: 0, max: 5, step: 1, default: 3, label: 'TRAIL' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
