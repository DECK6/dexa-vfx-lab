import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H12',
  slug: 'silk-waves',
  name: 'Silk Waves',
  category: 'bg',
  kind: 'webgl',
  cost: 2,
  wave: 9,
  tags: ['background', 'silk', 'wave', 'ribbon', 'webgl'],
  params: {
    folds: { type: 'range', min: 2, max: 8, step: 1, default: 5, label: 'FOLDS' },
    flow: { type: 'range', min: 0.3, max: 1.5, step: 0.05, default: 0.8, label: 'FLOW' },
    sheen: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.72, label: 'SHEEN' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
