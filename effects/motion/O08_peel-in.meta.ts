import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O08',
  slug: 'peel-in',
  name: 'Peel In',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['entrance', 'peel', 'paper', 'curl', 'reveal'],
  params: {
    curl: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.7, label: 'CURL' },
    damping: { type: 'range', min: 2, max: 10, step: 0.1, default: 4.8, label: 'DAMPING' },
    shadow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'CURL SHADOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
