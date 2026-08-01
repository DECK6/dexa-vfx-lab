import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N05',
  slug: 'rain-streak',
  name: 'Rain Streak',
  category: 'nature',
  kind: 'canvas',
  cost: 2,
  wave: 2,
  tags: ['nature', 'rain', 'streak', 'weather'],
  stateful: true,
  params: {
    density: { type: 'range', min: 24, max: 180, step: 1, default: 110, label: 'DENSITY' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    slant: { type: 'range', min: -0.6, max: 0.6, step: 0.02, default: -0.18, label: 'SLANT' },
    length: { type: 'range', min: 8, max: 60, step: 1, default: 28, label: 'LENGTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
