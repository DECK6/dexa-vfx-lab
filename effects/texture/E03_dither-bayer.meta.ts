import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E03',
  slug: 'dither-bayer',
  name: 'Dither Bayer',
  category: 'texture',
  kind: 'webgl',
  cost: 2,
  wave: 2,
  tags: ['texture', 'dither', 'bayer', 'ordered', 'webgl'],
  params: {
    pixelSize: { type: 'range', min: 1, max: 10, step: 1, default: 3, label: 'PIXEL SIZE' },
    levels: { type: 'range', min: 2, max: 8, step: 1, default: 4, label: 'LEVELS' },
    motionSpeed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'MOTION SPEED' },
    motionIntensity: { type: 'range', min: 0.2, max: 1, step: 0.05, default: 0.85, label: 'MOTION INTENSITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
