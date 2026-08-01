import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D03',
  slug: 'twirl-vortex',
  name: 'Twirl Vortex',
  category: 'distort',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['distort', 'twirl', 'vortex', 'rotation', 'webgl'],
  params: {
    twist: { type: 'range', min: 0.5, max: 7, step: 0.1, default: 4.2, label: 'TWIST' },
    radius: { type: 'range', min: 0.2, max: 0.85, step: 0.01, default: 0.58, label: 'RADIUS' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
