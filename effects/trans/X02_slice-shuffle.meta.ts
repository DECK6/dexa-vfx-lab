import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X02',
  slug: 'slice-shuffle',
  name: 'Slice Shuffle',
  category: 'trans',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['transition', 'slices', 'stagger'],
  params: {
    slices: { type: 'range', min: 4, max: 16, step: 1, default: 10, label: 'SLICES' },
    stagger: { type: 'range', min: 0, max: 0.8, step: 0.01, default: 0.46, label: 'STAGGER' },
    travel: { type: 'range', min: 0.6, max: 1.6, step: 0.01, default: 1.05, label: 'TRAVEL' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
