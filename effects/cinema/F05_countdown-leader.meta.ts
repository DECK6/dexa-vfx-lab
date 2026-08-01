import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F05',
  slug: 'countdown-leader',
  name: 'Countdown Leader',
  category: 'cinema',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['cinema', 'countdown', 'film-leader', 'academy'],
  params: {
    scale: { type: 'range', min: 0.7, max: 1.25, step: 0.01, default: 1, label: 'SCALE' },
    sweep: { type: 'range', min: 0.15, max: 0.8, step: 0.01, default: 0.5, label: 'SWEEP' },
    jitter: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.34, label: 'JITTER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
