import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I02',
  slug: 'card-carousel-3d',
  name: 'Card Carousel 3D',
  category: 'three',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['three', 'carousel', 'cards', 'cylinder', 'css-3d'],
  params: {
    cards: { type: 'range', min: 4, max: 10, step: 1, default: 7, label: 'CARDS' },
    radius: { type: 'range', min: 120, max: 420, step: 10, default: 260, label: 'RADIUS' },
    perspective: { type: 'range', min: 500, max: 1800, step: 20, default: 1040, label: 'PERSPECTIVE' },
    turns: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'TURNS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
