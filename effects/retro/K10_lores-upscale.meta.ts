import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K10',
  slug: 'lores-upscale',
  name: 'Lores Upscale',
  category: 'retro',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['retro', 'low-resolution', 'upscale', 'scanline'],
  params: {
    pixelSize: { type: 'range', min: 3, max: 24, step: 1, default: 11, label: 'PIXEL SIZE' },
    interpolation: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.18, label: 'INTERPOLATION' },
    scanlines: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'SCANLINES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
