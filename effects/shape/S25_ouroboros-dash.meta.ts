import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S25', slug: 'ouroboros-dash', name: 'Ouroboros Dash', category: 'shape', kind: 'react', cost: 1, wave: 9,
  tags: ['shape', 'ouroboros', 'ring', 'dash', 'chase'],
  params: {
    segments: { type: 'range', min: 12, max: 36, step: 1, default: 24, label: 'SEGMENTS' },
    speed: { type: 'range', min: 0.5, max: 2.5, step: 0.05, default: 1.25, label: 'SPEED' },
    pulse: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.62, label: 'PULSE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
