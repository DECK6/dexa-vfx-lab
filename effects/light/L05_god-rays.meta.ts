import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L05',
  slug: 'god-rays',
  name: 'God Rays',
  category: 'light',
  kind: 'webgl',
  cost: 3,
  wave: 3,
  tags: ['light', 'god-rays', 'volumetric', 'radial', 'webgl'],
  params: {
    density: { type: 'range', min: 0.3, max: 1.2, step: 0.05, default: 0.76, label: 'DENSITY' },
    exposure: { type: 'range', min: 0, max: 1.5, step: 0.05, default: 0.78, label: 'EXPOSURE' },
    decay: { type: 'range', min: 0.82, max: 0.98, step: 0.01, default: 0.93, label: 'DECAY' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
