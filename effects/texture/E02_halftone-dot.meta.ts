import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E02',
  slug: 'halftone-dot',
  name: 'Halftone Dot',
  category: 'texture',
  kind: 'webgl',
  cost: 2,
  wave: 2,
  tags: ['texture', 'halftone', 'dot', 'print', 'webgl'],
  params: {
    dotSize: { type: 'range', min: 4, max: 24, step: 1, default: 10, label: 'DOT SIZE' },
    contrast: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1.25, label: 'CONTRAST' },
    angle: { type: 'range', min: -45, max: 45, step: 1, default: 18, label: 'ANGLE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
