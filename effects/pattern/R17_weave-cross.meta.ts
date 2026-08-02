import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R17',
  slug: 'weave-cross',
  name: 'Weave Cross',
  category: 'pattern',
  kind: 'canvas',
  cost: 2,
  wave: 9,
  tags: ['pattern', 'weave', 'textile', 'crossing'],
  params: {
    spacing: { type: 'range', min: 10, max: 34, step: 1, default: 20, label: 'SPACING' },
    thickness: { type: 'range', min: 1.5, max: 7, step: 0.5, default: 3.5, label: 'THICKNESS' },
    bend: { type: 'range', min: 0, max: 0.45, step: 0.01, default: 0.2, label: 'BEND' },
    progress: { type: 'range', min: 0.5, max: 1.5, step: 0.05, default: 1, label: 'PROGRESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
