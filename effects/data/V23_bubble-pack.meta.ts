import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V23',
  slug: 'bubble-pack',
  name: 'Bubble Pack',
  category: 'data',
  kind: 'canvas',
  cost: 2,
  wave: 7,
  tags: ['data', 'bubble', 'packing', 'area', 'canvas'],
  params: {
    bubbles: { type: 'range', min: 5, max: 12, step: 1, default: 9, label: 'BUBBLES' },
    scale: { type: 'range', min: 0.65, max: 1.15, step: 0.01, default: 0.94, label: 'SCALE' },
    pulse: { type: 'range', min: 0, max: 0.18, step: 0.01, default: 0.06, label: 'PULSE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
