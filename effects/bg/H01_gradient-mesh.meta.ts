import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H01',
  slug: 'gradient-mesh',
  name: 'Gradient Mesh',
  category: 'bg',
  kind: 'webgl',
  cost: 2,
  wave: 9,
  tags: ['background', 'gradient', 'mesh', 'organic', 'webgl'],
  params: {
    scale: { type: 'range', min: 0.7, max: 2.2, step: 0.05, default: 1.25, label: 'SCALE' },
    softness: { type: 'range', min: 0.5, max: 1.8, step: 0.05, default: 1.1, label: 'SOFTNESS' },
    drift: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'DRIFT' },
    depth: { type: 'range', min: 0.15, max: 0.8, step: 0.01, default: 0.48, label: 'DEPTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
