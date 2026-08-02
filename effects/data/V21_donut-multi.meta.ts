import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V21',
  slug: 'donut-multi',
  name: 'Donut Multi',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['data', 'donut', 'rings', 'comparison'],
  params: {
    thickness: { type: 'range', min: 8, max: 28, step: 1, default: 16, label: 'THICKNESS' },
    gap: { type: 'range', min: 5, max: 24, step: 1, default: 12, label: 'GAP' },
    sweep: { type: 'range', min: 0.4, max: 1, step: 0.01, default: 0.84, label: 'SWEEP' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
