import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C10',
  slug: 'depth-layers-3d',
  name: 'Depth Layers 3D',
  category: 'camera',
  kind: 'react',
  cost: 2,
  wave: 3,
  tags: ['camera', 'depth', 'layers', '3d'],
  params: {
    layers: { type: 'range', min: 3, max: 6, step: 1, default: 4, label: 'LAYERS' },
    spread: { type: 'range', min: 30, max: 140, step: 5, default: 84, label: 'DEPTH SPREAD' },
    tilt: { type: 'range', min: 4, max: 24, step: 1, default: 13, label: 'TILT' },
    orbit: { type: 'range', min: 0.03, max: 0.16, step: 0.01, default: 0.09, label: 'ORBIT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
