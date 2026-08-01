import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R01',
  slug: 'perlin-field',
  name: 'Perlin Field',
  category: 'pattern',
  kind: 'webgl',
  cost: 2,
  wave: 2,
  tags: ['pattern', 'perlin', 'noise', 'field', 'webgl'],
  params: {
    scale: { type: 'range', min: 1, max: 10, step: 0.1, default: 4.2, label: 'SCALE' },
    contrast: { type: 'range', min: 0.4, max: 2.4, step: 0.05, default: 1.35, label: 'CONTRAST' },
    contours: { type: 'range', min: 0, max: 18, step: 1, default: 9, label: 'CONTOURS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
