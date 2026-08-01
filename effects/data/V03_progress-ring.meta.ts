import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V03',
  slug: 'progress-ring',
  name: 'Progress Ring',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['data', 'progress', 'ring', 'counter'],
  params: {
    thickness: { type: 'range', min: 4, max: 28, step: 1, default: 12, label: 'THICKNESS' },
    cycles: { type: 'range', min: 1, max: 4, step: 1, default: 1, label: 'CYCLES' },
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.58, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
