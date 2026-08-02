import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H03',
  slug: 'grid-horizon',
  name: 'Grid Horizon',
  category: 'bg',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['background', 'grid', 'horizon', 'synthwave', 'perspective'],
  params: {
    density: { type: 'range', min: 7, max: 18, step: 1, default: 12, label: 'DENSITY' },
    horizon: { type: 'range', min: 30, max: 58, step: 1, default: 43, label: 'HORIZON' },
    speed: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
