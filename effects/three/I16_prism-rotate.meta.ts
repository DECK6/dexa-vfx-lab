import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I16',
  slug: 'prism-rotate',
  name: 'Prism Rotate',
  category: 'three',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['three', 'prism', 'rotate', 'faces'],
  params: {
    size: { type: 'range', min: 180, max: 420, step: 10, default: 300, label: 'SIZE' },
    turns: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'TURNS' },
    tilt: { type: 'range', min: -24, max: 24, step: 1, default: -8, label: 'TILT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
