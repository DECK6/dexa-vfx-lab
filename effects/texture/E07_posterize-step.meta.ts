import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E07',
  slug: 'posterize-step',
  name: 'Posterize Step',
  category: 'texture',
  kind: 'webgl',
  cost: 1,
  wave: 2,
  tags: ['texture', 'posterize', 'quantize', 'steps', 'webgl'],
  params: {
    maxLevels: { type: 'range', min: 4, max: 10, step: 1, default: 10, label: 'MAX LEVELS' },
    contrast: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1.2, label: 'CONTRAST' },
    motionSpeed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'MOTION SPEED' },
    motionIntensity: { type: 'range', min: 0.2, max: 1, step: 0.05, default: 0.78, label: 'MOTION INTENSITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
