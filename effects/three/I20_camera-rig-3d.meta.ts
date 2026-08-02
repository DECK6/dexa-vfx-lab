import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I20',
  slug: 'camera-rig-3d',
  name: 'Camera Rig 3D',
  category: 'three',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['three', 'camera', 'orbit', 'stage'],
  params: {
    orbit: { type: 'range', min: 12, max: 55, step: 1, default: 34, label: 'ORBIT' },
    elevation: { type: 'range', min: 5, max: 32, step: 1, default: 18, label: 'ELEVATION' },
    depth: { type: 'range', min: 0.6, max: 1.5, step: 0.01, default: 1, label: 'DEPTH' },
    speed: { type: 'range', min: 1, max: 2, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
