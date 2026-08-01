import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S01',
  slug: 'stroke-draw',
  name: 'Stroke Draw',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['shape', 'stroke', 'draw', 'triad'],
  params: {
    thickness: { type: 'range', min: 1, max: 12, step: 0.5, default: 4, label: 'THICKNESS' },
    speed: { type: 'range', min: 0.5, max: 2, step: 0.1, default: 1, label: 'SPEED' },
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.55, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
