import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S09',
  slug: 'spiral-unfold',
  name: 'Spiral Unfold',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['shape', 'spiral', 'unfold', 'stroke'],
  params: {
    turns: { type: 'range', min: 2, max: 7, step: 0.25, default: 4.5, label: 'TURNS' },
    arms: { type: 'range', min: 1, max: 5, step: 1, default: 3, label: 'ARMS' },
    spread: { type: 'range', min: 0.45, max: 1, step: 0.01, default: 0.82, label: 'SPREAD' },
    weight: { type: 'range', min: 1, max: 8, step: 0.25, default: 3.5, label: 'WEIGHT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
