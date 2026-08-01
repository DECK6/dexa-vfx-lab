import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q05',
  slug: 'fluid-sim',
  name: 'Fluid Sim',
  category: 'liquid',
  kind: 'webgl',
  cost: 3,
  wave: 4,
  tags: ['liquid', 'fluid', 'curl-noise', 'advection', 'webgl'],
  params: {
    advection: { type: 'range', min: 0.1, max: 1.4, step: 0.01, default: 0.82, label: 'ADVECTION' },
    turbulence: { type: 'range', min: 0.2, max: 2, step: 0.01, default: 1.1, label: 'TURBULENCE' },
    detail: { type: 'range', min: 2, max: 7, step: 0.1, default: 4.2, label: 'DETAIL' },
    dye: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.78, label: 'DYE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
