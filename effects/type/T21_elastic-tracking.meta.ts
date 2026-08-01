import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T21',
  slug: 'elastic-tracking',
  name: 'Elastic Tracking',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['type', 'tracking', 'elastic', 'spring', 'letter-spacing'],
  params: {
    text: { type: 'enum', options: ['DEXA VFX', 'TRACKING', 'STRETCH THE GAP'], default: 'DEXA VFX', label: 'TEXT' },
    spread: { type: 'range', min: 0.1, max: 1.2, step: 0.01, default: 0.52, label: 'SPREAD' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'CYCLES' },
    lag: { type: 'range', min: 0, max: 0.06, step: 0.005, default: 0.025, label: 'LAG' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
