import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V09',
  slug: 'gauge-needle',
  name: 'Gauge Needle',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['data', 'gauge', 'needle', 'dial'],
  params: {
    sweep: { type: 'range', min: 160, max: 280, step: 1, default: 240, label: 'SWEEP' },
    swing: { type: 'range', min: 0.25, max: 1, step: 0.01, default: 0.86, label: 'SWING' },
    cycles: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
