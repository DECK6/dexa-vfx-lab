import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H09',
  slug: 'ray-burst-bg',
  name: 'Ray Burst BG',
  category: 'bg',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['background', 'ray', 'burst', 'radial', 'react'],
  params: {
    rays: { type: 'range', min: 10, max: 32, step: 2, default: 20, label: 'RAYS' },
    rotation: { type: 'range', min: -2, max: 2, step: 1, default: 1, label: 'ROTATION' },
    intensity: { type: 'range', min: 0.15, max: 1, step: 0.01, default: 0.62, label: 'INTENSITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
