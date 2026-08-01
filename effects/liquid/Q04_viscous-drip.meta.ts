import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q04',
  slug: 'viscous-drip',
  name: 'Viscous Drip',
  category: 'liquid',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['liquid', 'viscous', 'drip', 'stretch'],
  params: {
    strands: { type: 'range', min: 4, max: 11, step: 1, default: 7, label: 'STRANDS' },
    length: { type: 'range', min: 24, max: 72, step: 1, default: 56, label: 'DRIP LENGTH' },
    viscosity: { type: 'range', min: 0.25, max: 1, step: 0.01, default: 0.76, label: 'VISCOSITY' },
    cycles: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
