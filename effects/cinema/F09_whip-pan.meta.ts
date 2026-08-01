import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F09',
  slug: 'whip-pan',
  name: 'Whip Pan',
  category: 'cinema',
  kind: 'webgl',
  cost: 2,
  wave: 7,
  tags: ['cinema', 'whip-pan', 'motion-blur', 'shutter', 'webgl'],
  params: {
    direction: { type: 'enum', options: ['left', 'right'], default: 'left', label: 'DIRECTION' },
    strength: { type: 'range', min: 0.02, max: 0.28, step: 0.005, default: 0.16, label: 'STRENGTH' },
    shutter: { type: 'range', min: 0.4, max: 2.5, step: 0.05, default: 1.1, label: 'SHUTTER' },
    chroma: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.38, label: 'CHROMA' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
