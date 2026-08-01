import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O22',
  slug: 'tada-burst',
  name: 'Tada Burst',
  category: 'motion',
  kind: 'react',
  cost: 2,
  wave: 5,
  tags: ['motion', 'celebrate', 'spark', 'pop'],
  params: {
    sparks: { type: 'range', min: 8, max: 14, step: 1, default: 11, label: 'SPARKS' },
    pop: { type: 'range', min: 1.08, max: 1.45, step: 0.01, default: 1.26, label: 'POP' },
    spread: { type: 'range', min: 0.12, max: 0.55, step: 0.01, default: 0.32, label: 'SPREAD' },
    cycles: { type: 'range', min: 2, max: 3, step: 1, default: 2, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
