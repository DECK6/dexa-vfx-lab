import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L12',
  slug: 'spotlight-track',
  name: 'Spotlight Track',
  category: 'light',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['light', 'spotlight', 'tracking', 'orbit'],
  params: {
    radius: { type: 'range', min: 10, max: 42, step: 1, default: 34, label: 'RADIUS' },
    feather: { type: 'range', min: 5, max: 30, step: 1, default: 9, label: 'FEATHER' },
    laps: { type: 'range', min: 1, max: 5, step: 1, default: 3, label: 'LAPS' },
    ambient: { type: 'range', min: 0, max: 0.45, step: 0.01, default: 0.04, label: 'AMBIENT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
