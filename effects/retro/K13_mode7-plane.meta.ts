import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K13',
  slug: 'mode7-plane',
  name: 'Mode7 Plane',
  category: 'retro',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['retro', 'mode7', 'perspective', 'snes', 'webgl'],
  params: {
    horizon: { type: 'range', min: 0.3, max: 0.62, step: 0.01, default: 0.46, label: 'HORIZON' },
    perspective: { type: 'range', min: 0.4, max: 1.4, step: 0.01, default: 0.86, label: 'PERSPECTIVE' },
    turn: { type: 'range', min: 1, max: 4, step: 1, default: 1, label: 'TURN' },
    tileScale: { type: 'range', min: 1.5, max: 7, step: 0.1, default: 3.8, label: 'TILE SCALE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
