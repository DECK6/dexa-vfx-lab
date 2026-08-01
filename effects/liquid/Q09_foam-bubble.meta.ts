import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q09',
  slug: 'foam-bubble',
  name: 'Foam Bubble',
  category: 'liquid',
  kind: 'canvas',
  cost: 2,
  wave: 4,
  tags: ['liquid', 'foam', 'bubble', 'packing'],
  stateful: true,
  params: {
    count: { type: 'range', min: 18, max: 72, step: 1, default: 46, label: 'BUBBLES' },
    growth: { type: 'range', min: 0.4, max: 2, step: 0.05, default: 1, label: 'GROWTH' },
    merge: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.42, label: 'MERGE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
