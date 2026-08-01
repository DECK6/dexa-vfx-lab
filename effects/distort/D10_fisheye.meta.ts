import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D10',
  slug: 'fisheye',
  name: 'Fisheye',
  category: 'distort',
  kind: 'webgl',
  cost: 2,
  wave: 4,
  tags: ['distort', 'fisheye', 'lens', 'radial', 'webgl'],
  params: {
    strength: { type: 'range', min: 0.1, max: 1.2, step: 0.05, default: 0.72, label: 'STRENGTH' },
    radius: { type: 'range', min: 0.3, max: 0.72, step: 0.01, default: 0.52, label: 'RADIUS' },
    compression: { type: 'range', min: 0.1, max: 0.8, step: 0.05, default: 0.48, label: 'COMPRESSION' },
    speed: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
