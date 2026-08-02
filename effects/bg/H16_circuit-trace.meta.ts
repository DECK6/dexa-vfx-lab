import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H16',
  slug: 'circuit-trace',
  name: 'Circuit Trace',
  category: 'bg',
  kind: 'canvas',
  cost: 2,
  wave: 9,
  tags: ['background', 'circuit', 'trace', 'signal', 'canvas'],
  params: {
    traces: { type: 'range', min: 8, max: 24, step: 1, default: 15, label: 'TRACES' },
    speed: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'SPEED' },
    density: { type: 'range', min: 0.3, max: 1, step: 0.05, default: 0.72, label: 'DENSITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
