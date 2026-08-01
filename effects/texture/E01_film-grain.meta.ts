import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E01',
  slug: 'film-grain',
  name: 'Film Grain',
  category: 'texture',
  kind: 'canvas',
  cost: 2,
  wave: 1,
  tags: ['texture', 'film', 'grain'],
  params: {
    amount: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.32, label: 'AMOUNT' },
    grainSize: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'GRAIN SIZE' },
    mono: { type: 'toggle', default: true, label: 'MONO' },
  },
} satisfies FxMeta;

export default meta;
