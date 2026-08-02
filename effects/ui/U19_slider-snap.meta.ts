import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U19',
  slug: 'slider-snap',
  name: 'Slider Snap',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'slider', 'snap', 'tooltip'],
  params: {
    stops: { type: 'range', min: 4, max: 9, step: 1, default: 7, label: 'STOPS' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'CYCLES' },
    spring: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.58, label: 'SPRING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
