import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S15',
  slug: 'isometric-stack',
  name: 'Isometric Stack',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['shape', 'isometric', 'stack', 'float'],
  params: {
    layers: { type: 'range', min: 3, max: 7, step: 1, default: 5, label: 'LAYERS' },
    spacing: { type: 'range', min: 8, max: 34, step: 1, default: 19, label: 'SPACING' },
    tilt: { type: 'range', min: 42, max: 68, step: 1, default: 58, label: 'TILT' },
    float: { type: 'range', min: 8, max: 42, step: 1, default: 25, label: 'FLOAT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
