import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D06',
  slug: 'lens-barrel',
  name: 'Lens Barrel',
  category: 'distort',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['distort', 'lens', 'barrel', 'optics', 'webgl'],
  params: {
    curvature: { type: 'range', min: -0.65, max: 0.85, step: 0.01, default: 0.48, label: 'CURVATURE' },
    zoom: { type: 'range', min: 0.72, max: 1.15, step: 0.01, default: 0.9, label: 'ZOOM' },
    aberration: { type: 'range', min: 0, max: 0.018, step: 0.001, default: 0.006, label: 'ABERRATION' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
