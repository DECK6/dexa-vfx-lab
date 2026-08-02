import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I18',
  slug: 'orbit-rings-3d',
  name: 'Orbit Rings 3D',
  category: 'three',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['three', 'orbit', 'rings', 'gyroscope'],
  params: {
    rings: { type: 'range', min: 3, max: 7, step: 1, default: 5, label: 'RINGS' },
    radius: { type: 'range', min: 0.5, max: 1, step: 0.01, default: 0.78, label: 'RADIUS' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
