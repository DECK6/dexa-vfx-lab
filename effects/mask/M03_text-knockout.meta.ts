import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M03',
  slug: 'text-knockout',
  name: 'Text Knockout',
  category: 'mask',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['mask', 'knockout', 'subject'],
  params: {
    direction: { type: 'enum', options: ['horizontal', 'vertical'], default: 'horizontal', label: 'DIRECTION' },
    bandSize: { type: 'range', min: 18, max: 64, step: 1, default: 38, label: 'BAND SIZE' },
    cycles: { type: 'enum', options: ['1', '2', '3'], default: '1', label: 'CYCLES' },
    ghost: { type: 'toggle', default: true, label: 'GHOST' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
