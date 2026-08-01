import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E09',
  slug: 'risograph',
  name: 'Risograph',
  category: 'texture',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['texture', 'risograph', 'print', 'registration'],
  params: {
    offset: { type: 'range', min: 2, max: 24, step: 1, default: 10, label: 'OFFSET' },
    dotSize: { type: 'range', min: 2, max: 10, step: 1, default: 5, label: 'DOT SIZE' },
    ink: { type: 'range', min: 0.2, max: 1, step: 0.05, default: 0.72, label: 'INK' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
