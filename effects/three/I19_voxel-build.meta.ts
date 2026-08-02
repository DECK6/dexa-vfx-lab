import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I19',
  slug: 'voxel-build',
  name: 'Voxel Build',
  category: 'three',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['three', 'voxel', 'build', 'isometric'],
  params: {
    grid: { type: 'range', min: 5, max: 11, step: 2, default: 9, label: 'GRID' },
    height: { type: 'range', min: 0.15, max: 0.8, step: 0.01, default: 0.45, label: 'DROP HEIGHT' },
    depth: { type: 'range', min: 3, max: 18, step: 1, default: 10, label: 'DEPTH' },
    stagger: { type: 'range', min: 0.2, max: 0.75, step: 0.01, default: 0.54, label: 'STAGGER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
