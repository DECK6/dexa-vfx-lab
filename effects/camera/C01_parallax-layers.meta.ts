import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C01',
  slug: 'parallax-layers',
  name: 'Parallax Layers',
  category: 'camera',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['camera', 'parallax', 'depth'],
  params: {
    depth: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'DEPTH' },
    speed: { type: 'range', min: 0.5, max: 2, step: 0.01, default: 1, label: 'SPEED' },
    particles: { type: 'range', min: 6, max: 24, step: 1, default: 14, label: 'PARTICLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
