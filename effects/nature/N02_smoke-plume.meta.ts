import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N02',
  slug: 'smoke-plume',
  name: 'Smoke Plume',
  category: 'nature',
  kind: 'webgl',
  cost: 3,
  wave: 3,
  tags: ['nature', 'smoke', 'plume', 'fbm', 'webgl'],
  params: {
    density: { type: 'range', min: 0.25, max: 1.25, step: 0.05, default: 0.78, label: 'DENSITY' },
    scale: { type: 'range', min: 1.5, max: 6, step: 0.1, default: 3.6, label: 'SCALE' },
    drift: { type: 'range', min: 0.1, max: 1.2, step: 0.05, default: 0.58, label: 'DRIFT' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
