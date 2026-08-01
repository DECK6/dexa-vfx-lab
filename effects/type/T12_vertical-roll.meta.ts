import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T12',
  slug: 'vertical-roll',
  name: 'Vertical Roll',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['type', 'vertical', 'roll', 'slot-machine', 'reel'],
  params: {
    phrase: { type: 'enum', options: ['DEXA', 'MOTION', 'SIGNAL'], default: 'DEXA', label: 'PHRASE' },
    turns: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'TURNS' },
    stagger: { type: 'range', min: 0, max: 0.8, step: 0.05, default: 0.35, label: 'STAGGER' },
    window: { type: 'range', min: 2.4, max: 4.4, step: 0.1, default: 3.2, label: 'WINDOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
