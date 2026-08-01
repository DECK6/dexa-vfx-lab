import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q03',
  slug: 'paint-splatter',
  name: 'Paint Splatter',
  category: 'liquid',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['liquid', 'paint', 'splatter', 'droplet'],
  stateful: true,
  params: {
    drops: { type: 'range', min: 24, max: 120, step: 1, default: 68, label: 'DROPS' },
    spread: { type: 'range', min: 0.4, max: 1.6, step: 0.05, default: 1, label: 'SPREAD' },
    gravity: { type: 'range', min: 0, max: 2, step: 0.05, default: 0.8, label: 'GRAVITY' },
    size: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
