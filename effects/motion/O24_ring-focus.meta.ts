import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O24',
  slug: 'ring-focus',
  name: 'Ring Focus',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['motion', 'focus', 'ring', 'target'],
  params: {
    rings: { type: 'range', min: 2, max: 3, step: 1, default: 3, label: 'RINGS' },
    reach: { type: 'range', min: 0.4, max: 1.4, step: 0.01, default: 0.95, label: 'REACH' },
    pulse: { type: 'range', min: 0, max: 0.14, step: 0.005, default: 0.06, label: 'PULSE' },
    cycles: { type: 'range', min: 2, max: 3, step: 1, default: 3, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
