import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P05',
  slug: 'bokeh-drift',
  name: 'Bokeh Drift',
  category: 'particle',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['particle', 'bokeh', 'drift', 'depth'],
  params: {
    count: { type: 'range', min: 6, max: 30, step: 1, default: 18, label: 'COUNT' },
    size: { type: 'range', min: 16, max: 96, step: 1, default: 52, label: 'SIZE' },
    drift: { type: 'range', min: 2, max: 18, step: 0.5, default: 9, label: 'DRIFT' },
    blur: { type: 'range', min: 0, max: 14, step: 0.5, default: 5, label: 'BLUR' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
