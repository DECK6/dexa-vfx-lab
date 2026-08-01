import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V08',
  slug: 'node-graph',
  name: 'Node Graph',
  category: 'data',
  kind: 'react',
  cost: 2,
  wave: 3,
  tags: ['data', 'nodes', 'graph', 'network'],
  params: {
    nodes: { type: 'range', min: 7, max: 15, step: 1, default: 11, label: 'NODES' },
    spread: { type: 'range', min: 0.45, max: 0.9, step: 0.01, default: 0.72, label: 'SPREAD' },
    drift: { type: 'range', min: 8, max: 56, step: 1, default: 28, label: 'DRIFT' },
    links: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'LINKS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
