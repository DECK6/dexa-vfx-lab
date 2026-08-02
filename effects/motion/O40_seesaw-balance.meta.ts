import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O40',
  slug: 'seesaw-balance',
  name: 'Seesaw Balance',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['motion', 'physics', 'seesaw', 'balance', 'damping'],
  params: {
    tilt: { type: 'range', min: 4, max: 24, step: 1, default: 15, label: 'TILT' },
    damping: { type: 'range', min: 1, max: 7, step: 0.1, default: 3.8, label: 'DAMPING' },
    oscillations: { type: 'range', min: 2, max: 5, step: 1, default: 3, label: 'OSCILLATIONS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
