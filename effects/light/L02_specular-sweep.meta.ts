import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L02',
  slug: 'specular-sweep',
  name: 'Specular Sweep',
  category: 'light',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['light', 'specular', 'sweep'],
  params: {
    width: { type: 'range', min: 4, max: 30, step: 1, default: 12, label: 'WIDTH' },
    angle: { type: 'range', min: -35, max: 35, step: 1, default: -18, label: 'ANGLE' },
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.76, label: 'INTENSITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
