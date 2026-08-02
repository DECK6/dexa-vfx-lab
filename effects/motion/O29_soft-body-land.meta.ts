import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O29',
  slug: 'soft-body-land',
  name: 'Soft Body Land',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['motion', 'soft-body', 'landing', 'squash'],
  params: {
    height: { type: 'range', min: 0.15, max: 0.55, step: 0.01, default: 0.34, label: 'HEIGHT' },
    softness: { type: 'range', min: 0.15, max: 0.65, step: 0.01, default: 0.42, label: 'SOFTNESS' },
    damping: { type: 'range', min: 3, max: 9, step: 0.1, default: 5.8, label: 'DAMPING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
