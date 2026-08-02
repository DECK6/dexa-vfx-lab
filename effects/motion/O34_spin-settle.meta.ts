import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O34',
  slug: 'spin-settle',
  name: 'Spin Settle',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['physics', 'spin', 'coin', 'damping'],
  params: {
    turns: { type: 'range', min: 3, max: 10, step: 1, default: 7, label: 'TURNS' },
    damping: { type: 'range', min: 2, max: 7, step: 0.1, default: 4.6, label: 'DAMPING' },
    tilt: { type: 'range', min: 35, max: 76, step: 1, default: 64, label: 'TILT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
