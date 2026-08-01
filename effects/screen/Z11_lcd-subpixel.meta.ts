import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z11',
  slug: 'lcd-subpixel',
  name: 'LCD Subpixel',
  category: 'screen',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['screen', 'lcd', 'subpixel', 'rgb-stripe', 'webgl'],
  params: {
    scale: { type: 'range', min: 18, max: 96, step: 1, default: 42, label: 'PIXEL SCALE' },
    gap: { type: 'range', min: 0.02, max: 0.22, step: 0.01, default: 0.08, label: 'CELL GAP' },
    contrast: { type: 'range', min: 0.7, max: 1.8, step: 0.01, default: 1.22, label: 'CONTRAST' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
