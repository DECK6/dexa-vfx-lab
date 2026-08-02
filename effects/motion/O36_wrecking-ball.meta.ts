import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O36',
  slug: 'wrecking-ball',
  name: 'Wrecking Ball',
  category: 'motion',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['physics', 'pendulum', 'impact', 'destruction'],
  params: {
    swing: { type: 'range', min: 25, max: 58, step: 1, default: 44, label: 'SWING' },
    debris: { type: 'range', min: 4, max: 12, step: 1, default: 8, label: 'DEBRIS' },
    force: { type: 'range', min: 0.35, max: 1, step: 0.01, default: 0.78, label: 'FORCE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
