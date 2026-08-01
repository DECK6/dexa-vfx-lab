import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P11',
  slug: 'trail-emitter',
  name: 'Trail Emitter',
  category: 'particle',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['particle', 'trail', 'emitter', 'path'],
  stateful: true,
  params: {
    count: { type: 'range', min: 24, max: 160, step: 1, default: 96, label: 'COUNT' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    trail: { type: 'range', min: 0.1, max: 0.8, step: 0.01, default: 0.46, label: 'TRAIL' },
    size: { type: 'range', min: 1, max: 7, step: 0.1, default: 3, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
