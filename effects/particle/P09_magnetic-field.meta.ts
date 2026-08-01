import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P09',
  slug: 'magnetic-field',
  name: 'Magnetic Field',
  category: 'particle',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['particle', 'magnetic', 'field', 'alignment'],
  stateful: true,
  params: {
    density: { type: 'range', min: 20, max: 140, step: 1, default: 76, label: 'DENSITY' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    curvature: { type: 'range', min: 0.4, max: 1.4, step: 0.01, default: 0.86, label: 'CURVATURE' },
    size: { type: 'range', min: 1, max: 6, step: 0.1, default: 2.4, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
