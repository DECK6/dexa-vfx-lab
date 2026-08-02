import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T31',
  slug: 'magnet-letters',
  name: 'Magnet Letters',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['type', 'magnet', 'letters', 'assemble'],
  params: {
    phrase: { type: 'enum', options: ['DEXA', 'MAGNET', 'SNAP'], default: 'DEXA', label: 'PHRASE' },
    scatter: { type: 'range', min: 0.15, max: 0.7, step: 0.01, default: 0.42, label: 'SCATTER' },
    snap: { type: 'range', min: 0.3, max: 1, step: 0.05, default: 0.72, label: 'SNAP' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
