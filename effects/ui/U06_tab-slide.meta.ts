import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U06',
  slug: 'tab-slide',
  name: 'Tab Slide',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['ui', 'tabs', 'indicator', 'slide'],
  params: {
    tabs: { type: 'range', min: 3, max: 6, step: 1, default: 4, label: 'TABS' },
    cycles: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'CYCLES' },
    width: { type: 'range', min: 0.45, max: 0.9, step: 0.01, default: 0.72, label: 'WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
