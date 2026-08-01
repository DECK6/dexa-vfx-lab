import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R03',
  slug: 'cellular-automata',
  name: 'Cellular Automata',
  category: 'pattern',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['pattern', 'cellular', 'automata', 'grid'],
  stateful: true,
  params: {
    cellSize: { type: 'range', min: 5, max: 20, step: 1, default: 10, label: 'CELL SIZE' },
    density: { type: 'range', min: 0.08, max: 0.48, step: 0.01, default: 0.26, label: 'DENSITY' },
    rate: { type: 'range', min: 4, max: 30, step: 1, default: 15, label: 'RATE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
