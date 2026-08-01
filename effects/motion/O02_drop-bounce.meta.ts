import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O02',
  slug: 'drop-bounce',
  name: 'Drop Bounce',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['entrance', 'bounce', 'squash', 'gravity', 'physics'],
  params: {
    dropHeight: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.62, label: 'DROP HEIGHT' },
    bounces: { type: 'range', min: 1, max: 5, step: 0.1, default: 2.6, label: 'BOUNCES' },
    squash: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.62, label: 'SQUASH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
