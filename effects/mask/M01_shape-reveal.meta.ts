import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M01',
  slug: 'shape-reveal',
  name: 'Shape Reveal',
  category: 'mask',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['mask', 'shape', 'reveal'],
  params: {
    shape: { type: 'enum', options: ['circle', 'diamond', 'square'], default: 'circle', label: 'SHAPE' },
    size: { type: 'range', min: 0.6, max: 1.4, step: 0.01, default: 1, label: 'SIZE' },
    originX: { type: 'range', min: 20, max: 80, step: 1, default: 50, label: 'ORIGIN X' },
    originY: { type: 'range', min: 20, max: 80, step: 1, default: 50, label: 'ORIGIN Y' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
