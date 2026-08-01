import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X08',
  slug: 'blinds',
  name: 'Blinds',
  category: 'trans',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['transition', 'blinds', 'slats'],
  params: {
    slats: { type: 'range', min: 3, max: 16, step: 1, default: 8, label: 'SLATS' },
    axis: { type: 'enum', options: ['horizontal', 'vertical'], default: 'horizontal', label: 'AXIS' },
    gap: { type: 'range', min: 0, max: 8, step: 1, default: 2, label: 'GAP' },
    stagger: { type: 'range', min: 0, max: 0.8, step: 0.05, default: 0.35, label: 'STAGGER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
