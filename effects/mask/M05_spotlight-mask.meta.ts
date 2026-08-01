import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M05',
  slug: 'spotlight-mask',
  name: 'Spotlight Mask',
  category: 'mask',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['mask', 'spotlight', 'track'],
  params: {
    radius: { type: 'range', min: 12, max: 42, step: 1, default: 24, label: 'RADIUS' },
    travel: { type: 'range', min: 0, max: 34, step: 1, default: 24, label: 'TRAVEL' },
    softness: { type: 'range', min: 2, max: 18, step: 1, default: 8, label: 'SOFTNESS' },
    path: { type: 'enum', options: ['orbit', 'sweep', 'figure-eight'], default: 'orbit', label: 'PATH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
