import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N10',
  slug: 'bubble-rise',
  name: 'Bubble Rise',
  category: 'nature',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['nature', 'bubble', 'underwater', 'particle'],
  stateful: true,
  params: {
    count: { type: 'range', min: 12, max: 72, step: 1, default: 34, label: 'COUNT' },
    riseSpeed: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1, label: 'RISE SPEED' },
    wobble: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.55, label: 'WOBBLE' },
    size: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
