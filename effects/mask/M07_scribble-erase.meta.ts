import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M07',
  slug: 'scribble-erase',
  name: 'Scribble Erase',
  category: 'mask',
  kind: 'react',
  cost: 2,
  wave: 4,
  tags: ['mask', 'scribble', 'erase', 'stroke'],
  params: {
    width: { type: 'range', min: 28, max: 110, step: 2, default: 68, label: 'STROKE WIDTH' },
    passes: { type: 'range', min: 1, max: 3, step: 1, default: 3, label: 'PASSES' },
    roughness: { type: 'range', min: 0.4, max: 1.5, step: 0.05, default: 1, label: 'ROUGHNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
