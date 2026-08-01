import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U07',
  slug: 'modal-spring',
  name: 'Modal Spring',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['ui', 'modal', 'spring', 'dialog'],
  params: {
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'CYCLES' },
    bounce: { type: 'range', min: 0.1, max: 0.7, step: 0.01, default: 0.42, label: 'BOUNCE' },
    size: { type: 'range', min: 0.45, max: 0.82, step: 0.01, default: 0.64, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
