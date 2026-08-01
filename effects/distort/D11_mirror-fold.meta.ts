import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D11',
  slug: 'mirror-fold',
  name: 'Mirror Fold',
  category: 'distort',
  kind: 'canvas',
  cost: 1,
  wave: 2,
  tags: ['distort', 'mirror', 'fold', 'symmetry'],
  params: {
    axis: { type: 'enum', options: ['vertical', 'horizontal', 'quad'], default: 'vertical', label: 'AXIS' },
    depth: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.55, label: 'DEPTH' },
    seam: { type: 'range', min: 0, max: 8, step: 0.5, default: 2, label: 'SEAM' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
