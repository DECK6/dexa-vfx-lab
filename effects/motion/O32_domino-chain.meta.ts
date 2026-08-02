import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O32',
  slug: 'domino-chain',
  name: 'Domino Chain',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['physics', 'domino', 'chain-reaction', 'sequence'],
  params: {
    count: { type: 'range', min: 5, max: 11, step: 1, default: 9, label: 'COUNT' },
    speed: { type: 'range', min: 0.55, max: 1.4, step: 0.05, default: 1, label: 'SPEED' },
    lean: { type: 'range', min: 50, max: 78, step: 1, default: 68, label: 'LEAN' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
