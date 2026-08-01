import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M11',
  slug: 'split-mask',
  name: 'Split Mask',
  category: 'mask',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['mask', 'split', 'reveal', 'geometry'],
  params: {
    axis: { type: 'enum', options: ['vertical', 'horizontal', 'diagonal'], default: 'vertical', label: 'AXIS' },
    distance: { type: 'range', min: 0.04, max: 0.34, step: 0.01, default: 0.18, label: 'DISTANCE' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'CYCLES' },
    edge: { type: 'range', min: 1, max: 10, step: 0.5, default: 4, label: 'EDGE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
