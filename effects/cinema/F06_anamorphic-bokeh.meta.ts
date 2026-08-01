import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F06',
  slug: 'anamorphic-bokeh',
  name: 'Anamorphic Bokeh',
  category: 'cinema',
  kind: 'react',
  cost: 2,
  wave: 7,
  tags: ['cinema', 'anamorphic', 'bokeh', 'depth', 'flare'],
  params: {
    count: { type: 'range', min: 6, max: 24, step: 1, default: 15, label: 'COUNT' },
    stretch: { type: 'range', min: 1.5, max: 4.5, step: 0.1, default: 2.8, label: 'STRETCH' },
    depth: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.72, label: 'DEPTH' },
    flare: { type: 'range', min: 0, max: 1.5, step: 0.01, default: 0.82, label: 'FLARE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
