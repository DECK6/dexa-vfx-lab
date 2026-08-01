import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E11',
  slug: 'chromatic-grain',
  name: 'Chromatic Grain',
  category: 'texture',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['texture', 'grain', 'chromatic', 'rgb'],
  params: {
    amount: { type: 'range', min: 0.15, max: 1, step: 0.05, default: 0.68, label: 'AMOUNT' },
    grainSize: { type: 'range', min: 2, max: 9, step: 1, default: 4, label: 'GRAIN SIZE' },
    orbit: { type: 'range', min: 4, max: 42, step: 1, default: 22, label: 'ORBIT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
