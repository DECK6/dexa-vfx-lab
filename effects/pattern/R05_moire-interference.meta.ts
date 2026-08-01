import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R05',
  slug: 'moire-interference',
  name: 'Moire Interference',
  category: 'pattern',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['pattern', 'moire', 'interference', 'optical'],
  params: {
    rings: { type: 'range', min: 18, max: 64, step: 1, default: 42, label: 'RINGS' },
    spacing: { type: 'range', min: 0.65, max: 1.45, step: 0.01, default: 1, label: 'SPACING' },
    motion: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'MOTION' },
    lineWidth: { type: 'range', min: 0.4, max: 2.2, step: 0.1, default: 1, label: 'LINE WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
