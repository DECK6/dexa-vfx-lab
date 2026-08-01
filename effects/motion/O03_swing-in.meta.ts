import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O03',
  slug: 'swing-in',
  name: 'Swing In',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['entrance', 'pendulum', 'hinge', 'rotation'],
  params: {
    angle: { type: 'range', min: 30, max: 140, step: 1, default: 98, label: 'SWING ANGLE' },
    damping: { type: 'range', min: 1.5, max: 8, step: 0.1, default: 3.4, label: 'DAMPING' },
    stiffness: { type: 'range', min: 4, max: 20, step: 0.1, default: 11, label: 'STIFFNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
