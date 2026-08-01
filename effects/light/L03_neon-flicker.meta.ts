import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L03',
  slug: 'neon-flicker',
  name: 'Neon Flicker',
  category: 'light',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['light', 'neon', 'flicker'],
  params: {
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.82, label: 'GLOW' },
    flickerRate: { type: 'range', min: 8, max: 36, step: 1, default: 22, label: 'FLICKER RATE' },
    settle: { type: 'range', min: 0.1, max: 0.6, step: 0.01, default: 0.3, label: 'SETTLE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
