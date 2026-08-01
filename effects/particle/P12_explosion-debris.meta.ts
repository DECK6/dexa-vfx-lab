import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P12',
  slug: 'explosion-debris',
  name: 'Explosion Debris',
  category: 'particle',
  kind: 'canvas',
  cost: 3,
  wave: 4,
  tags: ['particle', 'explosion', 'debris', 'physics'],
  stateful: true,
  params: {
    count: { type: 'range', min: 24, max: 180, step: 1, default: 96, label: 'DEBRIS' },
    force: { type: 'range', min: 0.4, max: 2, step: 0.01, default: 1.15, label: 'FORCE' },
    gravity: { type: 'range', min: 0, max: 2, step: 0.01, default: 0.82, label: 'GRAVITY' },
    size: { type: 'range', min: 2, max: 18, step: 0.5, default: 8, label: 'SHARD SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
