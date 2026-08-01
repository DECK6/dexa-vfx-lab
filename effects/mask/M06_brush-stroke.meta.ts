import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M06',
  slug: 'brush-stroke',
  name: 'Brush Stroke',
  category: 'mask',
  kind: 'react',
  cost: 2,
  wave: 3,
  tags: ['mask', 'brush', 'reveal', 'paint'],
  params: {
    bristles: { type: 'range', min: 5, max: 12, step: 1, default: 8, label: 'BRISTLES' },
    roughness: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.58, label: 'ROUGHNESS' },
    edgeWidth: { type: 'range', min: 24, max: 140, step: 2, default: 72, label: 'EDGE WIDTH' },
    direction: { type: 'enum', options: ['left-to-right', 'right-to-left'], default: 'left-to-right', label: 'DIRECTION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
