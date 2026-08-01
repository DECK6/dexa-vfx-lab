import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S07',
  slug: 'voronoi-shatter',
  name: 'Voronoi Shatter',
  category: 'shape',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['shape', 'voronoi', 'shatter', 'cells', 'canvas'],
  params: {
    cells: { type: 'range', min: 10, max: 30, step: 1, default: 19, label: 'CELLS' },
    spread: { type: 'range', min: 0.05, max: 0.55, step: 0.01, default: 0.3, label: 'SPREAD' },
    rotation: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.62, label: 'ROTATION' },
    edge: { type: 'range', min: 0.5, max: 5, step: 0.1, default: 1.5, label: 'EDGE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
