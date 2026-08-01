import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O11',
  slug: 'spring-chain',
  name: 'Spring Chain',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['physics', 'spring', 'follow', 'echo'],
  params: {
    echoes: { type: 'range', min: 1, max: 3, step: 1, default: 3, label: 'ECHOES' },
    lag: { type: 'range', min: 0.04, max: 0.3, step: 0.01, default: 0.14, label: 'LAG' },
    stiffness: { type: 'range', min: 4, max: 18, step: 0.5, default: 9, label: 'STIFFNESS' },
    bounciness: { type: 'range', min: 0.15, max: 0.85, step: 0.01, default: 0.42, label: 'BOUNCINESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
