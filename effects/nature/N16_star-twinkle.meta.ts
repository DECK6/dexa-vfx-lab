import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N16',
  slug: 'star-twinkle',
  name: 'Star Twinkle',
  category: 'nature',
  kind: 'canvas',
  cost: 1,
  wave: 8,
  tags: ['nature', 'stars', 'twinkle', 'meteor', 'night'],
  params: {
    stars: { type: 'range', min: 36, max: 180, step: 1, default: 112, label: 'STARS' },
    twinkle: { type: 'range', min: 0.1, max: 1, step: 0.01, default: 0.72, label: 'TWINKLE' },
    meteors: { type: 'range', min: 0, max: 3, step: 1, default: 2, label: 'METEORS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
