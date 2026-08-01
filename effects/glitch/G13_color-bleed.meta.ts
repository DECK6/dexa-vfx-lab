import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G13',
  slug: 'color-bleed',
  name: 'Color Bleed',
  category: 'glitch',
  kind: 'webgl',
  cost: 2,
  wave: 4,
  tags: ['glitch', 'color', 'bleed', 'smear', 'webgl'],
  params: {
    distance: { type: 'range', min: 0.01, max: 0.18, step: 0.005, default: 0.09, label: 'DISTANCE' },
    threshold: { type: 'range', min: 0.05, max: 0.9, step: 0.01, default: 0.38, label: 'THRESHOLD' },
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.78, label: 'INTENSITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
