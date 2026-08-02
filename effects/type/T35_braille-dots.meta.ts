import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T35',
  slug: 'braille-dots',
  name: 'Braille Dots',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['type', 'braille', 'dots', 'cells'],
  params: {
    text: { type: 'enum', options: ['DEXA', 'SIGNAL', 'VFX LAB'], default: 'DEXA', label: 'TEXT' },
    dotSize: { type: 'range', min: 5, max: 18, step: 1, default: 10, label: 'DOT SIZE' },
    spacing: { type: 'range', min: 10, max: 28, step: 1, default: 17, label: 'SPACING' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
