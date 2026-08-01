import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P03',
  slug: 'spark-shower',
  name: 'Spark Shower',
  category: 'particle',
  kind: 'canvas',
  cost: 2,
  wave: 2,
  tags: ['particle', 'spark', 'shower', 'physics'],
  stateful: true,
  params: {
    count: { type: 'range', min: 20, max: 180, step: 1, default: 84, label: 'COUNT' },
    gravity: { type: 'range', min: 0.2, max: 2, step: 0.05, default: 0.9, label: 'GRAVITY' },
    spread: { type: 'range', min: 0.1, max: 1, step: 0.05, default: 0.58, label: 'SPREAD' },
    glow: { type: 'range', min: 0, max: 24, step: 1, default: 12, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
