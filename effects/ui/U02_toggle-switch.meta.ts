import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U02',
  slug: 'toggle-switch',
  name: 'Toggle Switch',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['ui', 'toggle', 'switch', 'transition'],
  params: {
    size: { type: 'range', min: 0.65, max: 1.25, step: 0.01, default: 0.92, label: 'SIZE' },
    cycles: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'CYCLES' },
    snap: { type: 'range', min: 0.35, max: 1, step: 0.01, default: 0.72, label: 'SNAP' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
