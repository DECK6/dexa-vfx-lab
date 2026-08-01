import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E12',
  slug: 'ascii-map',
  name: 'ASCII Map',
  category: 'texture',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['texture', 'ascii', 'mapping', 'terminal'],
  params: {
    cellSize: { type: 'range', min: 7, max: 22, step: 1, default: 12, label: 'CELL SIZE' },
    contrast: { type: 'range', min: 0.5, max: 2.5, step: 0.05, default: 1.35, label: 'CONTRAST' },
    motion: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'MOTION' },
    invert: { type: 'toggle', default: false, label: 'INVERT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
