import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R10',
  slug: 'stripe-shift',
  name: 'Stripe Shift',
  category: 'pattern',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['pattern', 'stripe', 'phase'],
  params: {
    orientation: { type: 'enum', options: ['horizontal', 'vertical'], default: 'horizontal', label: 'ORIENTATION' },
    stripeSize: { type: 'range', min: 18, max: 120, step: 2, default: 52, label: 'STRIPE SIZE' },
    shift: { type: 'range', min: 8, max: 160, step: 2, default: 72, label: 'SHIFT' },
    cycles: { type: 'enum', options: ['1', '2', '3'], default: '1', label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
