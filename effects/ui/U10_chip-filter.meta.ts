import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U10',
  slug: 'chip-filter',
  name: 'Chip Filter',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 4,
  tags: ['ui', 'filter', 'chips', 'flip'],
  params: {
    speed: { type: 'range', min: 0.5, max: 2, step: 0.1, default: 1, label: 'SPEED' },
    columns: { type: 'enum', options: ['two', 'four'], default: 'two', label: 'COLUMNS' },
    motion: { type: 'range', min: 0.4, max: 1.4, step: 0.05, default: 1, label: 'MOTION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
