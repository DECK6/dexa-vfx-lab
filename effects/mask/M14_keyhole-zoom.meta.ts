import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M14', slug: 'keyhole-zoom', name: 'Keyhole Zoom', category: 'mask', kind: 'react', cost: 1, wave: 9,
  tags: ['mask', 'keyhole', 'zoom', 'silhouette', 'reveal'],
  params: {
    zoom: { type: 'range', min: 0.6, max: 1.8, step: 0.05, default: 1.2, label: 'ZOOM' },
    throat: { type: 'range', min: 18, max: 42, step: 1, default: 28, label: 'THROAT' },
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.66, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
