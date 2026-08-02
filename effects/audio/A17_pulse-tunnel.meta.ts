import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A17',
  slug: 'pulse-tunnel',
  name: 'Pulse Tunnel',
  category: 'audio',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['audio', 'pulse', 'tunnel', 'depth'],
  params: {
    rings: { type: 'range', min: 6, max: 16, step: 1, default: 11, label: 'RINGS' },
    sensitivity: { type: 'range', min: 0.5, max: 2.5, step: 0.05, default: 1.35, label: 'SENSITIVITY' },
    depth: { type: 'range', min: 0.5, max: 1.8, step: 0.05, default: 1.1, label: 'DEPTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
