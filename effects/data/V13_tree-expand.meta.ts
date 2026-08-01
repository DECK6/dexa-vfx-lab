import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V13',
  slug: 'tree-expand',
  name: 'Tree Expand',
  category: 'data',
  kind: 'react',
  cost: 2,
  wave: 4,
  tags: ['data', 'tree', 'hierarchy', 'branch'],
  params: {
    levels: { type: 'range', min: 2, max: 4, step: 1, default: 4, label: 'LEVELS' },
    spread: { type: 'range', min: 0.5, max: 1.3, step: 0.01, default: 1, label: 'SPREAD' },
    nodeSize: { type: 'range', min: 8, max: 24, step: 1, default: 15, label: 'NODE SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
