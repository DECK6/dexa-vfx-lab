import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V26',
  slug: 'stream-graph',
  name: 'Stream Graph',
  category: 'data',
  kind: 'canvas',
  cost: 2,
  wave: 7,
  tags: ['data', 'streamgraph', 'bands', 'flow', 'canvas'],
  params: {
    bands: { type: 'range', min: 3, max: 7, step: 1, default: 5, label: 'BANDS' },
    amplitude: { type: 'range', min: 0.3, max: 1, step: 0.01, default: 0.72, label: 'AMPLITUDE' },
    flow: { type: 'range', min: 0.5, max: 2, step: 0.1, default: 1, label: 'FLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
