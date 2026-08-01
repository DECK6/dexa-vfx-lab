import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L07',
  slug: 'caustics',
  name: 'Caustics',
  category: 'light',
  kind: 'webgl',
  cost: 3,
  wave: 4,
  tags: ['light', 'caustics', 'water', 'refraction', 'webgl'],
  params: {
    scale: { type: 'range', min: 3, max: 14, step: 0.5, default: 7.5, label: 'SCALE' },
    intensity: { type: 'range', min: 0, max: 1.5, step: 0.01, default: 0.9, label: 'INTENSITY' },
    refraction: { type: 'range', min: 0, max: 0.08, step: 0.002, default: 0.028, label: 'REFRACTION' },
    speed: { type: 'range', min: 0.5, max: 2, step: 0.5, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
