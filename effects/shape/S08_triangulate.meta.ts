import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S08',
  slug: 'triangulate',
  name: 'Triangulate',
  category: 'shape',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['shape', 'triangle', 'mesh', 'unfold', 'canvas'],
  params: {
    density: { type: 'range', min: 3, max: 8, step: 1, default: 6, label: 'DENSITY' },
    depth: { type: 'range', min: 0.04, max: 0.4, step: 0.01, default: 0.22, label: 'DEPTH' },
    twist: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.48, label: 'TWIST' },
    edge: { type: 'range', min: 0.5, max: 4, step: 0.1, default: 1.2, label: 'EDGE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
