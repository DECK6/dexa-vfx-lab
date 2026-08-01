import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C04',
  slug: 'dolly-zoom',
  name: 'Dolly Zoom',
  category: 'camera',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['camera', 'vertigo', 'perspective'],
  params: {
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'INTENSITY' },
    depth: { type: 'range', min: 0.5, max: 2, step: 0.01, default: 1.25, label: 'DEPTH' },
    vignette: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.62, label: 'VIGNETTE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
