import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O33',
  slug: 'newton-cradle',
  name: 'Newton Cradle',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['physics', 'pendulum', 'collision', 'momentum'],
  params: {
    angle: { type: 'range', min: 18, max: 48, step: 1, default: 34, label: 'ANGLE' },
    tempo: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'TEMPO' },
    damping: { type: 'range', min: 0, max: 0.35, step: 0.01, default: 0.08, label: 'DAMPING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
