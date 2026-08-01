import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L14',
  slug: 'prism-refract',
  name: 'Prism Refract',
  category: 'light',
  kind: 'webgl',
  cost: 2,
  wave: 4,
  tags: ['light', 'prism', 'refraction', 'spectrum', 'webgl'],
  params: {
    dispersion: { type: 'range', min: 0.005, max: 0.12, step: 0.0025, default: 0.0525, label: 'DISPERSION' },
    angle: { type: 'range', min: -90, max: 90, step: 1, default: 24, label: 'ANGLE' },
    width: { type: 'range', min: 0.1, max: 0.8, step: 0.01, default: 0.46, label: 'WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
