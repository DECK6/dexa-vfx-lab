import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V06',
  slug: 'sparkline-scroll',
  name: 'Sparkline Scroll',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['data', 'sparkline', 'scroll', 'trend'],
  params: {
    points: { type: 'range', min: 8, max: 24, step: 1, default: 16, label: 'POINTS' },
    amplitude: { type: 'range', min: 0.2, max: 0.9, step: 0.01, default: 0.62, label: 'AMPLITUDE' },
    laps: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'LAPS' },
    thickness: { type: 'range', min: 2, max: 10, step: 1, default: 5, label: 'THICKNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
