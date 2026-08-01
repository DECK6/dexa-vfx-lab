import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y01',
  slug: 'halftone-cmyk',
  name: 'Halftone CMYK',
  category: 'stylize',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['stylize', 'halftone', 'cmyk', 'rosette', 'print'],
  params: {
    cellSize: { type: 'range', min: 5, max: 18, step: 1, default: 10, label: 'CELL SIZE' },
    separation: { type: 'range', min: 0, max: 8, step: 0.5, default: 2.5, label: 'SEPARATION' },
    contrast: { type: 'range', min: 0.7, max: 1.8, step: 0.05, default: 1.2, label: 'CONTRAST' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
