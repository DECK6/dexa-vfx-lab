import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O23',
  slug: 'stamp-slam',
  name: 'Stamp Slam',
  category: 'motion',
  kind: 'react',
  cost: 2,
  wave: 5,
  tags: ['motion', 'impact', 'slam', 'dust'],
  params: {
    lift: { type: 'range', min: 0.15, max: 0.75, step: 0.01, default: 0.42, label: 'LIFT' },
    impact: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.75, label: 'IMPACT' },
    dust: { type: 'range', min: 6, max: 16, step: 1, default: 11, label: 'DUST' },
    cycles: { type: 'range', min: 2, max: 3, step: 1, default: 2, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
