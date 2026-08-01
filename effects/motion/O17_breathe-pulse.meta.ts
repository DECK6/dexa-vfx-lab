import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O17',
  slug: 'breathe-pulse',
  name: 'Breathe Pulse',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['motion', 'idle', 'loop', 'breathe', 'scale'],
  params: {
    depth: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.6, label: 'DEPTH' },
    cycles: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'BREATHS' },
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.55, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
