import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R16',
  slug: 'moire-rings',
  name: 'Moire Rings',
  category: 'pattern',
  kind: 'canvas',
  cost: 1,
  wave: 9,
  tags: ['pattern', 'moire', 'rings', 'interference'],
  params: {
    rings: { type: 'range', min: 20, max: 70, step: 1, default: 46, label: 'RINGS' },
    separation: { type: 'range', min: 0.02, max: 0.28, step: 0.01, default: 0.13, label: 'SEPARATION' },
    drift: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'DRIFT' },
    lineWidth: { type: 'range', min: 0.4, max: 2, step: 0.1, default: 0.9, label: 'LINE WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
