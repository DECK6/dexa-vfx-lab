import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T11',
  slug: 'stretch-squash',
  name: 'Stretch Squash',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['type', 'stretch', 'squash', 'elastic', 'bounce'],
  params: {
    phrase: { type: 'enum', options: ['BOUNCE', 'ELASTIC', 'SQUASH IT'], default: 'BOUNCE', label: 'PHRASE' },
    amount: { type: 'range', min: 0.2, max: 0.85, step: 0.01, default: 0.62, label: 'AMOUNT' },
    tempo: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'TEMPO' },
    stagger: { type: 'range', min: 0.2, max: 1.4, step: 0.05, default: 0.75, label: 'STAGGER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
