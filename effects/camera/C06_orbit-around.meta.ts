import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C06',
  slug: 'orbit-around',
  name: 'Orbit Around',
  category: 'camera',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['camera', 'orbit', 'perspective', 'track'],
  params: {
    radiusX: { type: 'range', min: 0.05, max: 0.28, step: 0.01, default: 0.17, label: 'RADIUS X' },
    radiusY: { type: 'range', min: 0.02, max: 0.16, step: 0.01, default: 0.08, label: 'RADIUS Y' },
    depth: { type: 'range', min: 0.08, max: 0.36, step: 0.01, default: 0.22, label: 'DEPTH' },
    laps: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'LAPS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
