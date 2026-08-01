import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O09',
  slug: 'jelly-wobble',
  name: 'Jelly Wobble',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['physics', 'squash', 'elastic', 'bounce'],
  params: {
    amplitude: { type: 'range', min: 0.05, max: 0.5, step: 0.01, default: 0.32, label: 'AMPLITUDE' },
    frequency: { type: 'range', min: 1, max: 7, step: 0.1, default: 3.2, label: 'FREQUENCY' },
    damping: { type: 'range', min: 0.6, max: 5, step: 0.1, default: 2, label: 'DAMPING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
