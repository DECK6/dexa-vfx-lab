import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F08',
  slug: 'split-diopter',
  name: 'Split Diopter',
  category: 'cinema',
  kind: 'webgl',
  cost: 2,
  wave: 7,
  tags: ['cinema', 'split-diopter', 'dual-focus', 'lens', 'webgl'],
  params: {
    split: { type: 'range', min: 0.25, max: 0.75, step: 0.01, default: 0.5, label: 'SPLIT' },
    nearZoom: { type: 'range', min: 1.05, max: 1.65, step: 0.01, default: 1.3, label: 'NEAR ZOOM' },
    blur: { type: 'range', min: 0.002, max: 0.035, step: 0.001, default: 0.016, label: 'SEAM BLUR' },
    feather: { type: 'range', min: 0.01, max: 0.18, step: 0.005, default: 0.07, label: 'FEATHER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
