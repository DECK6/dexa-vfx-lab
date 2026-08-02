import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M16', slug: 'liquid-mask', name: 'Liquid Mask', category: 'mask', kind: 'webgl', cost: 2, wave: 9,
  tags: ['mask', 'liquid', 'fill', 'metaball', 'webgl'],
  params: {
    waves: { type: 'range', min: 2, max: 8, step: 1, default: 5, label: 'WAVES' },
    wobble: { type: 'range', min: 0.01, max: 0.16, step: 0.01, default: 0.075, label: 'WOBBLE' },
    edge: { type: 'range', min: 0.005, max: 0.06, step: 0.005, default: 0.025, label: 'EDGE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
