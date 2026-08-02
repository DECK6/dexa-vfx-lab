import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U20',
  slug: 'rating-stars',
  name: 'Rating Stars',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'rating', 'stars', 'feedback'],
  params: {
    rating: { type: 'range', min: 1, max: 5, step: 0.5, default: 4.5, label: 'RATING' },
    bounce: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.7, label: 'BOUNCE' },
    mode: { type: 'enum', options: ['precise', 'whole'], default: 'precise', label: 'FILL MODE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
