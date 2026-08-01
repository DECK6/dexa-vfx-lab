import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K03',
  slug: 'floyd-dither',
  name: 'Floyd Dither',
  category: 'retro',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['retro', 'dither', 'floyd-steinberg', 'error-diffusion', 'canvas'],
  params: {
    blockSize: { type: 'range', min: 2, max: 8, step: 1, default: 4, label: 'BLOCK SIZE' },
    contrast: { type: 'range', min: 0.6, max: 1.8, step: 0.05, default: 1.15, label: 'CONTRAST' },
    diffusion: { type: 'range', min: 0.35, max: 1, step: 0.05, default: 0.9, label: 'DIFFUSION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
