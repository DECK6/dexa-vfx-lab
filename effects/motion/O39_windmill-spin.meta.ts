import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O39',
  slug: 'windmill-spin',
  name: 'Windmill Spin',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['motion', 'physics', 'windmill', 'inertia', 'rotation'],
  params: {
    turns: { type: 'range', min: 1, max: 5, step: 1, default: 3, label: 'TURNS' },
    inertia: { type: 'range', min: 0.35, max: 1, step: 0.01, default: 0.94, label: 'INERTIA' },
    blades: { type: 'range', min: 3, max: 6, step: 1, default: 4, label: 'BLADES' },
    radius: { type: 'range', min: 0.2, max: 0.42, step: 0.01, default: 0.32, label: 'RADIUS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
