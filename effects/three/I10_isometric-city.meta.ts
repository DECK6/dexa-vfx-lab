import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I10',
  slug: 'isometric-city',
  name: 'Isometric City',
  category: 'three',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['three', 'isometric', 'city', 'growth'],
  params: {
    density: { type: 'range', min: 3, max: 6, step: 1, default: 5, label: 'DENSITY' },
    height: { type: 'range', min: 0.45, max: 1.4, step: 0.05, default: 0.9, label: 'HEIGHT' },
    orbit: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.55, label: 'ORBIT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
