import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O21',
  slug: 'attention-shake',
  name: 'Attention Shake',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['motion', 'shake', 'attention', 'alert'],
  params: {
    amp: { type: 'range', min: 4, max: 48, step: 1, default: 22, label: 'AMPLITUDE' },
    shakes: { type: 'range', min: 2, max: 7, step: 1, default: 4, label: 'SHAKES' },
    cycles: { type: 'range', min: 2, max: 3, step: 1, default: 3, label: 'CYCLES' },
    ghost: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.6, label: 'GHOST' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
