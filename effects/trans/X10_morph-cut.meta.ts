import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X10',
  slug: 'morph-cut',
  name: 'Morph Cut',
  category: 'trans',
  kind: 'react',
  cost: 2,
  wave: 4,
  tags: ['transition', 'morph', 'path', 'paper'],
  params: {
    tension: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.58, label: 'TENSION' },
    edge: { type: 'range', min: 1, max: 12, step: 1, default: 5, label: 'EDGE' },
    invert: { type: 'toggle', default: false, label: 'INVERT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
