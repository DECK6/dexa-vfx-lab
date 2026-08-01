import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E04',
  slug: 'paper-fiber',
  name: 'Paper Fiber',
  category: 'texture',
  kind: 'canvas',
  cost: 1,
  wave: 3,
  tags: ['texture', 'paper', 'fiber', 'organic'],
  params: {
    density: { type: 'range', min: 30, max: 180, step: 1, default: 96, label: 'DENSITY' },
    fiberLength: { type: 'range', min: 8, max: 52, step: 1, default: 28, label: 'FIBER LENGTH' },
    drift: { type: 'range', min: 0.25, max: 2, step: 0.05, default: 1, label: 'DRIFT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
