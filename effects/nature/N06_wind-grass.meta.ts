import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N06',
  slug: 'wind-grass',
  name: 'Wind Grass',
  category: 'nature',
  kind: 'react',
  cost: 2,
  wave: 3,
  tags: ['nature', 'grass', 'wind', 'sway'],
  params: {
    density: { type: 'range', min: 18, max: 64, step: 1, default: 42, label: 'DENSITY' },
    wind: { type: 'range', min: 0.25, max: 1, step: 0.01, default: 0.72, label: 'WIND' },
    height: { type: 'range', min: 0.45, max: 1.25, step: 0.01, default: 0.92, label: 'HEIGHT' },
    gusts: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'GUSTS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
