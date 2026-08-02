import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N18',
  slug: 'ice-freeze',
  name: 'Ice Freeze',
  category: 'nature',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['nature', 'ice', 'frost', 'crystal', 'freeze'],
  params: {
    density: { type: 'range', min: 8, max: 36, step: 1, default: 22, label: 'DENSITY' },
    spread: { type: 'range', min: 0.35, max: 1, step: 0.01, default: 0.74, label: 'SPREAD' },
    branching: { type: 'range', min: 0.1, max: 0.8, step: 0.01, default: 0.46, label: 'BRANCHING' },
    frost: { type: 'range', min: 0.15, max: 0.9, step: 0.01, default: 0.58, label: 'FROST' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
