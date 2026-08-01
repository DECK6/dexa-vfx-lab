import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D12',
  slug: 'kaleidoscope',
  name: 'Kaleidoscope',
  category: 'distort',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['distort', 'kaleidoscope', 'mirror', 'radial', 'webgl'],
  params: {
    segments: { type: 'range', min: 4, max: 16, step: 1, default: 8, label: 'SEGMENTS' },
    zoom: { type: 'range', min: 0.65, max: 1.5, step: 0.05, default: 1.05, label: 'ZOOM' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
