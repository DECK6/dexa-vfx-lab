import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P01',
  slug: 'particle-burst',
  name: 'Particle Burst',
  category: 'particle',
  kind: 'canvas',
  cost: 2,
  wave: 1,
  tags: ['particle', 'burst', 'physics'],
  stateful: true,
  params: {
    count: { type: 'range', min: 20, max: 300, step: 1, default: 120, label: 'COUNT' },
    gravity: { type: 'range', min: 0, max: 2, step: 0.01, default: 0.65, label: 'GRAVITY' },
    drag: { type: 'range', min: 0, max: 0.2, step: 0.001, default: 0.025, label: 'DRAG' },
    size: { type: 'range', min: 1, max: 6, step: 0.1, default: 2.8, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
