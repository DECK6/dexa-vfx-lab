import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U11',
  slug: 'accordion-expand',
  name: 'Accordion Expand',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 4,
  tags: ['ui', 'accordion', 'expand', 'fade'],
  params: {
    sections: { type: 'range', min: 3, max: 5, step: 1, default: 4, label: 'SECTIONS' },
    speed: { type: 'range', min: 0.5, max: 2, step: 0.1, default: 1, label: 'SPEED' },
    easing: { type: 'enum', options: ['soft', 'snappy'], default: 'soft', label: 'EASING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
