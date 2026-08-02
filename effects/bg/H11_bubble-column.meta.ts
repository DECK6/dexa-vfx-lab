import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H11',
  slug: 'bubble-column',
  name: 'Bubble Column',
  category: 'bg',
  kind: 'canvas',
  cost: 1,
  wave: 9,
  tags: ['background', 'bubble', 'column', 'rising', 'canvas'],
  stateful: true,
  params: {
    count: { type: 'range', min: 18, max: 72, step: 1, default: 42, label: 'COUNT' },
    lift: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'LIFT' },
    spread: { type: 'range', min: 0.15, max: 0.7, step: 0.01, default: 0.4, label: 'SPREAD' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
