import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T02',
  slug: 'scramble-decode',
  name: 'Scramble Decode',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['type', 'scramble', 'decode', 'digital'],
  params: {
    speed: { type: 'range', min: 0.5, max: 3, step: 0.1, default: 1.4, label: 'SPEED' },
    spread: { type: 'range', min: 0.2, max: 0.8, step: 0.01, default: 0.5, label: 'SPREAD' },
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.55, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
