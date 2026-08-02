import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V17',
  slug: 'funnel-steps',
  name: 'Funnel Steps',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['data', 'funnel', 'conversion', 'steps', 'pipeline'],
  params: {
    steps: { type: 'range', min: 3, max: 6, step: 1, default: 5, label: 'STEPS' },
    dropoff: { type: 'range', min: 0.08, max: 0.28, step: 0.01, default: 0.16, label: 'DROPOFF' },
    speed: { type: 'range', min: 0.6, max: 1.6, step: 0.1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
