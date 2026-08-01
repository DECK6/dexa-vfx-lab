import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X01',
  slug: 'iris-wipe',
  name: 'Iris Wipe',
  category: 'trans',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['transition', 'iris', 'radial'],
  params: {
    softness: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.12, label: 'SOFTNESS' },
    originX: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.5, label: 'ORIGIN X' },
    originY: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.5, label: 'ORIGIN Y' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
