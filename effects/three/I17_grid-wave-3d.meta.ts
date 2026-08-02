import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I17',
  slug: 'grid-wave-3d',
  name: 'Grid Wave 3D',
  category: 'three',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['three', 'grid', 'wave', 'perspective'],
  params: {
    amplitude: { type: 'range', min: 12, max: 90, step: 1, default: 48, label: 'AMPLITUDE' },
    density: { type: 'range', min: 7, max: 13, step: 2, default: 11, label: 'DENSITY' },
    tilt: { type: 'range', min: 36, max: 72, step: 1, default: 58, label: 'TILT' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
