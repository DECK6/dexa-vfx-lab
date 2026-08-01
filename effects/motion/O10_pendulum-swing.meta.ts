import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O10',
  slug: 'pendulum-swing',
  name: 'Pendulum Swing',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['physics', 'swing', 'damping', 'gravity'],
  params: {
    angle: { type: 'range', min: 6, max: 62, step: 1, default: 34, label: 'ANGLE' },
    rope: { type: 'range', min: 0.2, max: 0.62, step: 0.01, default: 0.42, label: 'ROPE' },
    damping: { type: 'range', min: 0, max: 0.9, step: 0.01, default: 0.3, label: 'DAMPING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
