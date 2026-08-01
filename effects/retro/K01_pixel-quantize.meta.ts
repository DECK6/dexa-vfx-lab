import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K01',
  slug: 'pixel-quantize',
  name: 'Pixel Quantize',
  category: 'retro',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['retro', 'pixel', 'quantize', 'palette', 'webgl'],
  params: {
    pixelSize: { type: 'range', min: 3, max: 24, step: 1, default: 10, label: 'PIXEL SIZE' },
    paletteMix: { type: 'range', min: 0.4, max: 1, step: 0.05, default: 0.92, label: 'PALETTE MIX' },
    contrast: { type: 'range', min: 0.7, max: 1.8, step: 0.05, default: 1.2, label: 'CONTRAST' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
