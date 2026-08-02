import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S22',
  slug: 'nested-frames',
  name: 'Nested Frames',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['shape', 'frame', 'nested', 'zoom', 'tunnel'],
  params: {
    frames: { type: 'range', min: 5, max: 13, step: 1, default: 9, label: 'FRAMES' },
    zoom: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'ZOOM' },
    corner: { type: 'range', min: 0, max: 100, step: 2, default: 28, label: 'CORNER' },
    weight: { type: 'range', min: 1, max: 8, step: 0.5, default: 3, label: 'WEIGHT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
