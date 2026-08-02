import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H08',
  slug: 'halftone-drift',
  name: 'Halftone Drift',
  category: 'bg',
  kind: 'webgl',
  cost: 1,
  wave: 9,
  tags: ['background', 'halftone', 'dots', 'gradient', 'webgl'],
  params: {
    cellSize: { type: 'range', min: 7, max: 22, step: 1, default: 13, label: 'CELL SIZE' },
    amplitude: { type: 'range', min: 0.15, max: 0.8, step: 0.01, default: 0.48, label: 'AMPLITUDE' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
