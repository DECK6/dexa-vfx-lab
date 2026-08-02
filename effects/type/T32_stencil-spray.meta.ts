import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T32',
  slug: 'stencil-spray',
  name: 'Stencil Spray',
  category: 'type',
  kind: 'canvas',
  cost: 2,
  wave: 9,
  tags: ['type', 'stencil', 'spray', 'paint'],
  params: {
    phrase: { type: 'enum', options: ['DEXA', 'SPRAY', 'SIGNAL'], default: 'DEXA', label: 'PHRASE' },
    density: { type: 'range', min: 80, max: 520, step: 20, default: 300, label: 'DENSITY' },
    overspray: { type: 'range', min: 0.1, max: 1, step: 0.05, default: 0.48, label: 'OVERSPRAY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
