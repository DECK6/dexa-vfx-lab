import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R09',
  slug: 'maze-generate',
  name: 'Maze Generate',
  category: 'pattern',
  kind: 'canvas',
  cost: 2,
  wave: 4,
  tags: ['pattern', 'maze', 'dfs', 'procedural'],
  params: {
    cellSize: { type: 'range', min: 10, max: 30, step: 1, default: 18, label: 'CELL SIZE' },
    progress: { type: 'range', min: 0.4, max: 1.8, step: 0.05, default: 1, label: 'PROGRESS' },
    thickness: { type: 'range', min: 0.7, max: 3, step: 0.1, default: 1.4, label: 'THICKNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
