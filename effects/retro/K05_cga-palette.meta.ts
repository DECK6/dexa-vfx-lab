import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K05',
  slug: 'cga-palette',
  name: 'CGA Palette',
  category: 'retro',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['retro', 'cga', 'cyan', 'magenta', 'webgl'],
  params: {
    pixelWidth: { type: 'range', min: 2, max: 10, step: 1, default: 5, label: 'PIXEL WIDTH' },
    saturation: { type: 'range', min: 0.5, max: 1.5, step: 0.05, default: 1.1, label: 'SATURATION' },
    scanline: { type: 'range', min: 0, max: 0.7, step: 0.05, default: 0.35, label: 'SCANLINE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
