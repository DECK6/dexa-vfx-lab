import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E08',
  slug: 'cross-hatch',
  name: 'Cross Hatch',
  category: 'texture',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['texture', 'cross-hatch', 'ink', 'line', 'webgl'],
  params: {
    spacing: { type: 'range', min: 5, max: 22, step: 1, default: 11, label: 'SPACING' },
    lineWidth: { type: 'range', min: 0.6, max: 3.5, step: 0.1, default: 1.4, label: 'LINE WIDTH' },
    contrast: { type: 'range', min: 0.6, max: 2, step: 0.05, default: 1.25, label: 'CONTRAST' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
