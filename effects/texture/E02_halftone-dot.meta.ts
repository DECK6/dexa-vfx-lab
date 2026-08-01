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
    motionSpeed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'MOTION SPEED' },
    motionIntensity: { type: 'range', min: 0.15, max: 1, step: 0.05, default: 0.72, label: 'MOTION INTENSITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
