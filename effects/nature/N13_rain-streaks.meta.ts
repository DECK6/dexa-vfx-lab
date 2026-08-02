import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N13',
  slug: 'rain-streaks',
  name: 'Rain Streaks',
  category: 'nature',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['nature', 'rain', 'glass', 'rivulet', 'refraction'],
  params: {
    density: { type: 'range', min: 18, max: 84, step: 1, default: 46, label: 'DENSITY' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'SPEED' },
    trail: { type: 'range', min: 12, max: 74, step: 1, default: 42, label: 'TRAIL' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
