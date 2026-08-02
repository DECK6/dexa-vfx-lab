import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I11',
  slug: 'sphere-points',
  name: 'Sphere Points',
  category: 'three',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['three', 'sphere', 'points', 'projection'],
  params: {
    points: { type: 'range', min: 120, max: 720, step: 20, default: 420, label: 'POINTS' },
    radius: { type: 'range', min: 0.18, max: 0.42, step: 0.01, default: 0.31, label: 'RADIUS' },
    turns: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'TURNS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
