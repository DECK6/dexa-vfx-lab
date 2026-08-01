import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S05',
  slug: 'polygon-rotate',
  name: 'Polygon Rotate',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['shape', 'polygon', 'rotation', 'stack'],
  params: {
    sides: { type: 'enum', options: ['3', '4', '5', '6', '8'], default: '6', label: 'SIDES' },
    layers: { type: 'range', min: 3, max: 10, step: 1, default: 7, label: 'LAYERS' },
    turns: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'TURNS' },
    twist: { type: 'range', min: 0, max: 45, step: 1, default: 18, label: 'TWIST' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
