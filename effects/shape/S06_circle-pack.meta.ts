import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S06',
  slug: 'circle-pack',
  name: 'Circle Pack',
  category: 'shape',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['shape', 'circle', 'packing', 'growth', 'canvas'],
  params: {
    count: { type: 'range', min: 16, max: 64, step: 1, default: 38, label: 'COUNT' },
    growth: { type: 'range', min: 0.35, max: 1, step: 0.01, default: 0.82, label: 'GROWTH' },
    drift: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.42, label: 'DRIFT' },
    weight: { type: 'range', min: 0.5, max: 5, step: 0.1, default: 1.8, label: 'WEIGHT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
