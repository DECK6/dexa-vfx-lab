import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H02',
  slug: 'aurora-veil',
  name: 'Aurora Veil',
  category: 'bg',
  kind: 'webgl',
  cost: 2,
  wave: 9,
  tags: ['background', 'aurora', 'vertical', 'curtain', 'webgl'],
  params: {
    curtains: { type: 'range', min: 3, max: 7, step: 1, default: 5, label: 'CURTAINS' },
    width: { type: 'range', min: 0.08, max: 0.26, step: 0.01, default: 0.16, label: 'WIDTH' },
    glow: { type: 'range', min: 0.25, max: 1, step: 0.01, default: 0.68, label: 'GLOW' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
