import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R11',
  slug: 'checker-flip',
  name: 'Checker Flip',
  category: 'pattern',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['pattern', 'checker', 'flip'],
  params: {
    cellSize: { type: 'range', min: 36, max: 160, step: 4, default: 80, label: 'CELL SIZE' },
    stagger: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.58, label: 'STAGGER' },
    depth: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'DEPTH' },
    cycles: { type: 'enum', options: ['1', '2', '3'], default: '1', label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
