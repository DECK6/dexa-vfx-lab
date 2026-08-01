import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T03',
  slug: 'odometer-roll',
  name: 'Odometer Roll',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['type', 'odometer', 'counter', 'numbers'],
  params: {
    value: { type: 'range', min: 0, max: 99999, step: 1, default: 12864, label: 'VALUE' },
    digits: { type: 'range', min: 3, max: 6, step: 1, default: 5, label: 'DIGITS' },
    turns: { type: 'range', min: 1, max: 6, step: 1, default: 3, label: 'TURNS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
