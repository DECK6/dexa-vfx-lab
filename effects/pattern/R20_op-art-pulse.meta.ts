import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R20',
  slug: 'op-art-pulse',
  name: 'Op Art Pulse',
  category: 'pattern',
  kind: 'webgl',
  cost: 2,
  wave: 9,
  tags: ['pattern', 'op-art', 'checker', 'optical', 'webgl'],
  params: {
    cells: { type: 'range', min: 8, max: 28, step: 1, default: 16, label: 'CELLS' },
    warp: { type: 'range', min: 0.05, max: 0.6, step: 0.01, default: 0.34, label: 'WARP' },
    pulse: { type: 'range', min: 0.05, max: 0.5, step: 0.01, default: 0.26, label: 'PULSE' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
