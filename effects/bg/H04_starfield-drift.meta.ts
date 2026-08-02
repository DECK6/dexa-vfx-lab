import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H04',
  slug: 'starfield-drift',
  name: 'Starfield Drift',
  category: 'bg',
  kind: 'canvas',
  cost: 1,
  wave: 9,
  tags: ['background', 'starfield', 'depth', 'drift', 'canvas'],
  stateful: true,
  params: {
    density: { type: 'range', min: 36, max: 132, step: 1, default: 82, label: 'DENSITY' },
    drift: { type: 'range', min: 0.2, max: 1.2, step: 0.05, default: 0.55, label: 'DRIFT' },
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.42, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
