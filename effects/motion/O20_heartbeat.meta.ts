import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O20',
  slug: 'heartbeat',
  name: 'Heartbeat',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['motion', 'idle', 'loop', 'pulse', 'heartbeat'],
  params: {
    beats: { type: 'range', min: 1, max: 8, step: 1, default: 5, label: 'BEATS' },
    depth: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.6, label: 'DEPTH' },
    rings: { type: 'range', min: 2, max: 6, step: 1, default: 4, label: 'RINGS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
