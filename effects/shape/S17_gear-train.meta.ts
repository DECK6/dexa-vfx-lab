import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S17',
  slug: 'gear-train',
  name: 'Gear Train',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 6,
  tags: ['shape', 'gear', 'mechanical', 'kinematics'],
  params: {
    turns: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'TURNS' },
    toothDepth: { type: 'range', min: 8, max: 22, step: 1, default: 15, label: 'TOOTH DEPTH' },
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.52, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
