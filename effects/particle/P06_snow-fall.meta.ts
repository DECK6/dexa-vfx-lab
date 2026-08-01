import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P06',
  slug: 'snow-fall',
  name: 'Snow Fall',
  category: 'particle',
  kind: 'canvas',
  cost: 2,
  wave: 2,
  tags: ['particle', 'snow', 'fall', 'weather'],
  stateful: true,
  params: {
    count: { type: 'range', min: 24, max: 180, step: 1, default: 96, label: 'COUNT' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    wind: { type: 'range', min: -1, max: 1, step: 0.05, default: 0.2, label: 'WIND' },
    size: { type: 'range', min: 1, max: 6, step: 0.1, default: 2.6, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
