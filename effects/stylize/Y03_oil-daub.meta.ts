import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y03',
  slug: 'oil-daub',
  name: 'Oil Daub',
  category: 'stylize',
  kind: 'webgl',
  cost: 3,
  wave: 6,
  tags: ['stylize', 'oil-paint', 'brush', 'impasto', 'direction-field'],
  params: {
    radius: { type: 'range', min: 1, max: 10, step: 0.5, default: 5.5, label: 'DAUB RADIUS' },
    strokeScale: { type: 'range', min: 2, max: 12, step: 0.5, default: 6, label: 'STROKE SCALE' },
    impasto: { type: 'range', min: 0, max: 1.4, step: 0.05, default: 0.82, label: 'IMPASTO' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
