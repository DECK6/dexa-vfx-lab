import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C15', slug: 'drone-orbit', name: 'Drone Orbit', category: 'camera', kind: 'react', cost: 2, wave: 9,
  tags: ['camera', 'drone', 'orbit', 'aerial', 'spiral'],
  params: {
    altitude: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.68, label: 'ALTITUDE' },
    radius: { type: 'range', min: 0.1, max: 0.8, step: 0.01, default: 0.52, label: 'RADIUS' },
    turns: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'TURNS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
