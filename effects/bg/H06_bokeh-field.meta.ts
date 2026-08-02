import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H06',
  slug: 'bokeh-field',
  name: 'Bokeh Field',
  category: 'bg',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['background', 'bokeh', 'aperture', 'depth', 'ambient'],
  params: {
    count: { type: 'range', min: 8, max: 24, step: 1, default: 15, label: 'COUNT' },
    radius: { type: 'range', min: 60, max: 190, step: 5, default: 118, label: 'RADIUS' },
    drift: { type: 'range', min: 4, max: 20, step: 1, default: 11, label: 'DRIFT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
