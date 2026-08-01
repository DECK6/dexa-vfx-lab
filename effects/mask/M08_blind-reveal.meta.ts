import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M08',
  slug: 'blind-reveal',
  name: 'Blind Reveal',
  category: 'mask',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['mask', 'blind', 'slats', 'reveal'],
  params: {
    slats: { type: 'range', min: 4, max: 16, step: 1, default: 10, label: 'SLATS' },
    orientation: { type: 'enum', options: ['vertical', 'horizontal'], default: 'vertical', label: 'ORIENTATION' },
    stagger: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.42, label: 'STAGGER' },
    edge: { type: 'range', min: 1, max: 8, step: 0.5, default: 3, label: 'EDGE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
