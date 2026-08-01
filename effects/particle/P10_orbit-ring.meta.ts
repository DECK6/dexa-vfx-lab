import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P10',
  slug: 'orbit-ring',
  name: 'Orbit Ring',
  category: 'particle',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['particle', 'orbit', 'ring', 'rotation'],
  stateful: true,
  params: {
    count: { type: 'range', min: 16, max: 120, step: 1, default: 64, label: 'COUNT' },
    rings: { type: 'range', min: 1, max: 4, step: 1, default: 3, label: 'RINGS' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    radius: { type: 'range', min: 0.2, max: 0.48, step: 0.01, default: 0.36, label: 'RADIUS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
