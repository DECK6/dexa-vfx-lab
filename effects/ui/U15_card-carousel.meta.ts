import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U15',
  slug: 'card-carousel',
  name: 'Card Carousel',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'carousel', 'cards', 'snap'],
  params: {
    cards: { type: 'range', min: 3, max: 7, step: 1, default: 5, label: 'CARDS' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    depth: { type: 'range', min: 0.4, max: 1, step: 0.01, default: 0.78, label: 'DEPTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
