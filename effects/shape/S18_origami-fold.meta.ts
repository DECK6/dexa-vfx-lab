import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S18',
  slug: 'origami-fold',
  name: 'Origami Fold',
  category: 'shape',
  kind: 'react',
  cost: 2,
  wave: 6,
  tags: ['shape', 'origami', 'fold', 'paper'],
  params: {
    foldDepth: { type: 'range', min: 70, max: 168, step: 1, default: 138, label: 'FOLD DEPTH' },
    perspective: { type: 'range', min: 500, max: 1600, step: 25, default: 920, label: 'PERSPECTIVE' },
    stagger: { type: 'range', min: 0.15, max: 0.8, step: 0.01, default: 0.52, label: 'STAGGER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
