import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E10',
  slug: 'vignette-breathe',
  name: 'Vignette Breathe',
  category: 'texture',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['texture', 'vignette', 'breathe', 'pulse'],
  params: {
    intensity: { type: 'range', min: 0.15, max: 0.95, step: 0.01, default: 0.68, label: 'INTENSITY' },
    softness: { type: 'range', min: 0.2, max: 0.85, step: 0.01, default: 0.58, label: 'SOFTNESS' },
    cycles: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
