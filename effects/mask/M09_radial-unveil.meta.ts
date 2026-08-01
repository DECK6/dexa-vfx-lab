import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M09',
  slug: 'radial-unveil',
  name: 'Radial Unveil',
  category: 'mask',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['mask', 'radial', 'unveil'],
  params: {
    direction: { type: 'enum', options: ['clockwise', 'counter-clockwise'], default: 'clockwise', label: 'DIRECTION' },
    startAngle: { type: 'range', min: -180, max: 180, step: 1, default: -90, label: 'START ANGLE' },
    softness: { type: 'range', min: 0, max: 36, step: 1, default: 10, label: 'SOFTNESS' },
    radius: { type: 'range', min: 42, max: 76, step: 1, default: 64, label: 'RADIUS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
