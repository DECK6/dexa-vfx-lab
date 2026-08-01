import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D05',
  slug: 'wave-shear',
  name: 'Wave Shear',
  category: 'distort',
  kind: 'canvas',
  cost: 2,
  wave: 2,
  tags: ['distort', 'wave', 'shear', 'slice'],
  params: {
    strength: { type: 'range', min: 0, max: 0.18, step: 0.005, default: 0.075, label: 'STRENGTH' },
    frequency: { type: 'range', min: 1, max: 8, step: 1, default: 4, label: 'FREQUENCY' },
    cycles: { type: 'range', min: 1, max: 4, step: 1, default: 1, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
