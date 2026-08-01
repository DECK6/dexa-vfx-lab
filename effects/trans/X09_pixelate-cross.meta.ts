import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X09',
  slug: 'pixelate-cross',
  name: 'Pixelate Cross',
  category: 'trans',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['transition', 'pixelate', 'cross', 'mosaic', 'webgl'],
  params: {
    pixelSize: { type: 'range', min: 4, max: 40, step: 1, default: 22, label: 'PIXEL SIZE' },
    crossWidth: { type: 'range', min: 0.08, max: 0.5, step: 0.01, default: 0.28, label: 'CROSS WIDTH' },
    softness: { type: 'range', min: 0.005, max: 0.08, step: 0.005, default: 0.025, label: 'SOFTNESS' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
