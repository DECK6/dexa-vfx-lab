import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K11',
  slug: 'palette-cycle',
  name: 'Palette Cycle',
  category: 'retro',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['retro', 'palette', 'color-cycle', 'demoscene'],
  params: {
    bands: { type: 'range', min: 4, max: 12, step: 1, default: 8, label: 'BANDS' },
    speed: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'SPEED' },
    contrast: { type: 'range', min: 0.6, max: 2, step: 0.05, default: 1.25, label: 'CONTRAST' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
