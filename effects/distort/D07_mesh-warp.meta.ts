import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D07',
  slug: 'mesh-warp',
  name: 'Mesh Warp',
  category: 'distort',
  kind: 'webgl',
  cost: 3,
  wave: 4,
  tags: ['distort', 'mesh', 'warp', 'grid', 'webgl'],
  params: {
    strength: { type: 'range', min: 0.01, max: 0.18, step: 0.005, default: 0.085, label: 'STRENGTH' },
    columns: { type: 'range', min: 3, max: 9, step: 1, default: 5, label: 'COLUMNS' },
    fluidity: { type: 'range', min: 0.2, max: 1.4, step: 0.05, default: 0.8, label: 'FLUIDITY' },
    speed: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
