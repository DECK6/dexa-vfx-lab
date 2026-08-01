import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O15',
  slug: 'inertia-drift',
  name: 'Inertia Drift',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['physics', 'inertia', 'brake', 'trail'],
  params: {
    distance: { type: 'range', min: 0.1, max: 0.42, step: 0.01, default: 0.28, label: 'DISTANCE' },
    brake: { type: 'range', min: 2, max: 9, step: 0.1, default: 5.2, label: 'BRAKE' },
    lean: { type: 'range', min: 0, max: 26, step: 1, default: 15, label: 'LEAN' },
    trails: { type: 'range', min: 0, max: 5, step: 1, default: 4, label: 'TRAILS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
