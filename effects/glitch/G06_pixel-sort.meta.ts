import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G06',
  slug: 'pixel-sort',
  name: 'Pixel Sort',
  category: 'glitch',
  kind: 'canvas',
  cost: 3,
  wave: 3,
  tags: ['glitch', 'pixel', 'sort', 'distortion'],
  params: {
    threshold: { type: 'range', min: 0.08, max: 0.9, step: 0.01, default: 0.34, label: 'THRESHOLD' },
    streak: { type: 'range', min: 8, max: 72, step: 1, default: 38, label: 'STREAK' },
    density: { type: 'range', min: 1, max: 6, step: 1, default: 2, label: 'DENSITY' },
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.78, label: 'INTENSITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
