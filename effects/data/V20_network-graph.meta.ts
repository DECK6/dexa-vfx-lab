import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V20',
  slug: 'network-graph',
  name: 'Network Graph',
  category: 'data',
  kind: 'canvas',
  cost: 2,
  wave: 7,
  stateful: true,
  tags: ['data', 'network', 'spring', 'nodes', 'canvas'],
  params: {
    nodes: { type: 'range', min: 8, max: 24, step: 1, default: 16, label: 'NODES' },
    tension: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.62, label: 'TENSION' },
    damping: { type: 'range', min: 0.75, max: 0.98, step: 0.01, default: 0.9, label: 'DAMPING' },
    nodeSize: { type: 'range', min: 3, max: 12, step: 0.5, default: 6, label: 'NODE SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
