import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q12',
  slug: 'pour-fill',
  name: 'Pour Fill',
  category: 'liquid',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['liquid', 'pour', 'fill', 'vessel', 'bubble'],
  params: {
    amount: { type: 'range', min: 0.35, max: 0.92, step: 0.01, default: 0.78, label: 'AMOUNT' },
    streamWidth: { type: 'range', min: 4, max: 22, step: 1, default: 11, label: 'STREAM WIDTH' },
    bubbles: { type: 'range', min: 4, max: 28, step: 1, default: 15, label: 'BUBBLES' },
    slosh: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.48, label: 'SLOSH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
