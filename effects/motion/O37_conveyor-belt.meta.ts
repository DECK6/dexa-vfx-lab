import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O37',
  slug: 'conveyor-belt',
  name: 'Conveyor Belt',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['physics', 'conveyor', 'transport', 'mechanical'],
  params: {
    speed: { type: 'range', min: 0.5, max: 1.5, step: 0.05, default: 1, label: 'SPEED' },
    bounce: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.42, label: 'BOUNCE' },
    rollers: { type: 'range', min: 5, max: 10, step: 1, default: 7, label: 'ROLLERS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
