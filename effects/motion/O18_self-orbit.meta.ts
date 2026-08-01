import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O18',
  slug: 'self-orbit',
  name: 'Self Orbit',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['motion', 'idle', 'loop', 'orbit', 'bank'],
  params: {
    radius: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.5, label: 'RADIUS' },
    flatten: { type: 'range', min: 0.1, max: 1, step: 0.01, default: 0.42, label: 'FLATTEN' },
    lean: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.6, label: 'LEAN' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
