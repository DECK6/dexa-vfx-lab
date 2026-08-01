import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O19',
  slug: 'tilt-sway',
  name: 'Tilt Sway',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['motion', 'idle', 'loop', 'wind', 'tilt'],
  params: {
    sway: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.6, label: 'SWAY' },
    gust: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.5, label: 'GUST' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
