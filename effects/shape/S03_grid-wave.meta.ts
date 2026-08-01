import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S03',
  slug: 'grid-wave',
  name: 'Grid Wave',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['shape', 'grid', 'wave'],
  params: {
    density: { type: 'range', min: 4, max: 10, step: 1, default: 7, label: 'DENSITY' },
    amplitude: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.62, label: 'AMPLITUDE' },
    speed: { type: 'range', min: 0.5, max: 3, step: 0.1, default: 1.4, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
