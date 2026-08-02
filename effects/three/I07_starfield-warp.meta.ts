import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I07',
  slug: 'starfield-warp',
  name: 'Starfield Warp',
  category: 'three',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['three', 'starfield', 'warp', 'projection', 'canvas'],
  params: {
    stars: { type: 'range', min: 80, max: 420, step: 10, default: 260, label: 'STARS' },
    speed: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'SPEED' },
    spread: { type: 'range', min: 0.4, max: 1.4, step: 0.02, default: 0.92, label: 'SPREAD' },
    trail: { type: 'range', min: 0.01, max: 0.18, step: 0.005, default: 0.075, label: 'TRAIL' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
