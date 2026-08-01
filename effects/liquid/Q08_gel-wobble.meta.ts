import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q08',
  slug: 'gel-wobble',
  name: 'Gel Wobble',
  category: 'liquid',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['liquid', 'gel', 'wobble'],
  params: {
    wobble: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'WOBBLE' },
    elasticity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.74, label: 'ELASTICITY' },
    blur: { type: 'range', min: 0, max: 18, step: 1, default: 7, label: 'BLUR' },
    cycles: { type: 'enum', options: ['1', '2', '3'], default: '1', label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
