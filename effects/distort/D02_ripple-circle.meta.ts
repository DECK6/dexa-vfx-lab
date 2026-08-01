import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D02',
  slug: 'ripple-circle',
  name: 'Ripple Circle',
  category: 'distort',
  kind: 'webgl',
  cost: 2,
  wave: 2,
  tags: ['distort', 'ripple', 'circle', 'wave', 'webgl'],
  params: {
    strength: { type: 'range', min: 0, max: 0.12, step: 0.002, default: 0.045, label: 'STRENGTH' },
    frequency: { type: 'range', min: 3, max: 16, step: 0.5, default: 9, label: 'FREQUENCY' },
    radius: { type: 'range', min: 0.25, max: 1.2, step: 0.01, default: 0.82, label: 'RADIUS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
