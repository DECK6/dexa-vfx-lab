import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X06',
  slug: 'clock-wipe',
  name: 'Clock Wipe',
  category: 'trans',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['transition', 'wipe', 'radial'],
  params: {
    startAngle: { type: 'range', min: -180, max: 180, step: 1, default: -90, label: 'START ANGLE' },
    softness: { type: 'range', min: 0, max: 24, step: 1, default: 4, label: 'SOFTNESS' },
    direction: { type: 'enum', options: ['clockwise', 'counterclockwise'], default: 'clockwise', label: 'DIRECTION' },
    rim: { type: 'toggle', default: true, label: 'RIM' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
