import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P08',
  slug: 'swarm-flock',
  name: 'Swarm Flock',
  category: 'particle',
  kind: 'canvas',
  cost: 3,
  wave: 3,
  tags: ['particle', 'swarm', 'boids', 'flock'],
  stateful: true,
  params: {
    count: { type: 'range', min: 24, max: 180, step: 1, default: 108, label: 'COUNT' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    cohesion: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.66, label: 'COHESION' },
    size: { type: 'range', min: 1, max: 7, step: 0.1, default: 3.2, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
