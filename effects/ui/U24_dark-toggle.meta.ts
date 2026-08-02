import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U24',
  slug: 'dark-toggle',
  name: 'Dark Toggle',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'theme', 'dark-mode', 'reveal'],
  params: {
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    origin: { type: 'enum', options: ['center', 'top-right'], default: 'top-right', label: 'ORIGIN' },
    radius: { type: 'range', min: 0.75, max: 1.35, step: 0.01, default: 1, label: 'RADIUS' },
    snap: { type: 'range', min: 0.35, max: 1, step: 0.01, default: 0.72, label: 'SNAP' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
