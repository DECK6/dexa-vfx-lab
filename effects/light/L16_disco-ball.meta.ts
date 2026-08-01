import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L16',
  slug: 'disco-ball',
  name: 'Disco Ball',
  category: 'light',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['light', 'disco', 'mirror-ball', 'facets', 'reflections'],
  params: {
    facets: { type: 'range', min: 5, max: 11, step: 1, default: 8, label: 'FACETS' },
    reflections: { type: 'range', min: 18, max: 72, step: 1, default: 42, label: 'REFLECTIONS' },
    rotation: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'ROTATION' },
    sparkle: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.76, label: 'SPARKLE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
