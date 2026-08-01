import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R02',
  slug: 'flow-field',
  name: 'Flow Field',
  category: 'pattern',
  kind: 'canvas',
  cost: 3,
  wave: 3,
  tags: ['pattern', 'flow', 'field', 'trail'],
  stateful: true,
  params: {
    count: { type: 'range', min: 36, max: 180, step: 1, default: 110, label: 'COUNT' },
    scale: { type: 'range', min: 1, max: 8, step: 0.1, default: 4.2, label: 'FIELD SCALE' },
    speed: { type: 'range', min: 20, max: 140, step: 1, default: 72, label: 'SPEED' },
    trail: { type: 'range', min: 4, max: 28, step: 1, default: 16, label: 'TRAIL' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
