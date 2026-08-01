import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L13',
  slug: 'glow-trail',
  name: 'Glow Trail',
  category: 'light',
  kind: 'canvas',
  cost: 2,
  wave: 2,
  tags: ['light', 'glow', 'trail', 'afterimage'],
  stateful: true,
  params: {
    trailLength: { type: 'range', min: 4, max: 36, step: 1, default: 20, label: 'TRAIL LENGTH' },
    radius: { type: 'range', min: 0, max: 0.18, step: 0.01, default: 0.08, label: 'MOTION RADIUS' },
    glow: { type: 'range', min: 0, max: 30, step: 1, default: 16, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
