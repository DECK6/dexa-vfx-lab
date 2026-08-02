import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q15',
  slug: 'lava-flow',
  name: 'Lava Flow',
  category: 'liquid',
  kind: 'webgl',
  cost: 2,
  wave: 8,
  tags: ['liquid', 'lava', 'viscous', 'crust', 'webgl'],
  params: {
    viscosity: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.76, label: 'VISCOSITY' },
    heat: { type: 'range', min: 0.35, max: 1.3, step: 0.01, default: 0.9, label: 'HEAT' },
    crust: { type: 'range', min: 0.1, max: 0.9, step: 0.01, default: 0.56, label: 'CRUST' },
    scale: { type: 'range', min: 2, max: 7, step: 0.1, default: 4.3, label: 'SCALE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
