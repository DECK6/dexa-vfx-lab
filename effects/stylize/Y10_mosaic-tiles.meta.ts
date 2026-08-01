import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y10',
  slug: 'mosaic-tiles',
  name: 'Mosaic Tiles',
  category: 'stylize',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['stylize', 'mosaic', 'tiles', 'grout', 'canvas'],
  params: {
    tileSize: { type: 'range', min: 24, max: 64, step: 2, default: 40, label: 'TILE SIZE' },
    irregularity: { type: 'range', min: 0, max: 0.38, step: 0.01, default: 0.18, label: 'IRREGULARITY' },
    grout: { type: 'range', min: 1, max: 7, step: 0.5, default: 3, label: 'GROUT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
