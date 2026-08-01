import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V02',
  slug: 'counter-odometer',
  name: 'Counter Odometer',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['data', 'counter', 'odometer', 'numbers'],
  params: {
    value: { type: 'range', min: 0, max: 9999, step: 1, default: 2048, label: 'VALUE' },
    speed: { type: 'range', min: 0.5, max: 2, step: 0.1, default: 1, label: 'SPEED' },
    digits: { type: 'range', min: 3, max: 6, step: 1, default: 4, label: 'DIGITS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
