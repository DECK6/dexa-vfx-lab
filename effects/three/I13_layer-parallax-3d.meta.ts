import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I13',
  slug: 'layer-parallax-3d',
  name: 'Layer Parallax 3D',
  category: 'three',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['three', 'parallax', 'layers', 'depth'],
  params: {
    layers: { type: 'range', min: 3, max: 7, step: 1, default: 5, label: 'LAYERS' },
    depth: { type: 'range', min: 35, max: 130, step: 5, default: 75, label: 'DEPTH' },
    orbit: { type: 'range', min: 0.02, max: 0.14, step: 0.01, default: 0.07, label: 'ORBIT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
