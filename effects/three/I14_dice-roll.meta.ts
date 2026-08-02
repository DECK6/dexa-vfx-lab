import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I14',
  slug: 'dice-roll',
  name: 'Dice Roll',
  category: 'three',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['three', 'dice', 'roll', 'bounce'],
  params: {
    size: { type: 'range', min: 100, max: 260, step: 10, default: 170, label: 'SIZE' },
    bounce: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.72, label: 'BOUNCE' },
    rolls: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'ROLLS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
