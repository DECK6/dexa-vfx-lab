import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X12',
  slug: 'liquid-warp',
  name: 'Liquid Warp',
  category: 'trans',
  kind: 'webgl',
  cost: 3,
  wave: 3,
  tags: ['transition', 'liquid', 'warp', 'reveal', 'webgl'],
  params: {
    warp: { type: 'range', min: 0.01, max: 0.16, step: 0.005, default: 0.085, label: 'WARP' },
    flowScale: { type: 'range', min: 1.5, max: 8, step: 0.1, default: 4.2, label: 'FLOW SCALE' },
    edgeWidth: { type: 'range', min: 0.01, max: 0.16, step: 0.005, default: 0.065, label: 'EDGE WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
