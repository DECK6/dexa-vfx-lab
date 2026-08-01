import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P14',
  slug: 'point-cloud-form',
  name: 'Point Cloud Form',
  category: 'particle',
  kind: 'webgl',
  cost: 3,
  wave: 4,
  tags: ['particle', 'point-cloud', 'assembly', 'form', 'webgl'],
  params: {
    density: { type: 'range', min: 24, max: 96, step: 1, default: 58, label: 'DENSITY' },
    pointSize: { type: 'range', min: 0.15, max: 0.48, step: 0.01, default: 0.29, label: 'POINT SIZE' },
    scatter: { type: 'range', min: 0.1, max: 1, step: 0.01, default: 0.72, label: 'SCATTER' },
    threshold: { type: 'range', min: 0.02, max: 0.9, step: 0.01, default: 0.16, label: 'ALPHA GATE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
