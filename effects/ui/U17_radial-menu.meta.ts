import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U17',
  slug: 'radial-menu',
  name: 'Radial Menu',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'radial', 'menu', 'fab'],
  params: {
    items: { type: 'range', min: 4, max: 8, step: 1, default: 6, label: 'ITEMS' },
    spread: { type: 'range', min: 0.55, max: 1.15, step: 0.01, default: 0.88, label: 'SPREAD' },
    layout: { type: 'enum', options: ['full', 'fan'], default: 'full', label: 'LAYOUT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
