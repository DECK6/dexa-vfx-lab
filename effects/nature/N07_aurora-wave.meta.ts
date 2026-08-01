import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N07',
  slug: 'aurora-wave',
  name: 'Aurora Wave',
  category: 'nature',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['nature', 'aurora', 'curtain', 'wave', 'webgl'],
  params: {
    intensity: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.78, label: 'INTENSITY' },
    curtains: { type: 'range', min: 2, max: 7, step: 1, default: 4, label: 'CURTAINS' },
    bend: { type: 'range', min: 0.2, max: 1.4, step: 0.05, default: 0.82, label: 'BEND' },
    speed: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
