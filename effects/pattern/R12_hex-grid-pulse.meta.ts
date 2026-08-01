import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R12',
  slug: 'hex-grid-pulse',
  name: 'Hex Grid Pulse',
  category: 'pattern',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['pattern', 'hexagon', 'grid', 'pulse'],
  params: {
    cellSize: { type: 'range', min: 44, max: 132, step: 2, default: 82, label: 'CELL SIZE' },
    pulse: { type: 'range', min: 0.25, max: 1, step: 0.01, default: 0.78, label: 'PULSE' },
    cycles: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'CYCLES' },
    falloff: { type: 'range', min: 0.3, max: 1.6, step: 0.01, default: 0.9, label: 'FALLOFF' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
