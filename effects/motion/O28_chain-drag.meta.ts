import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O28',
  slug: 'chain-drag',
  name: 'Chain Drag',
  category: 'motion',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['motion', 'chain', 'drag', 'follow'],
  params: {
    links: { type: 'range', min: 8, max: 28, step: 2, default: 20, label: 'LINKS' },
    lag: { type: 'range', min: 0.008, max: 0.04, step: 0.002, default: 0.02, label: 'LAG' },
    reach: { type: 'range', min: 0.2, max: 0.42, step: 0.01, default: 0.32, label: 'REACH' },
    thickness: { type: 'range', min: 1, max: 5, step: 0.5, default: 2.5, label: 'THICKNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
