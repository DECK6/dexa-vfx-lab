import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F12',
  slug: 'dolly-rig',
  name: 'Dolly Rig',
  category: 'cinema',
  kind: 'react',
  cost: 2,
  wave: 7,
  tags: ['cinema', 'dolly', 'camera-rig', 'track', 'parallax'],
  params: {
    travel: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.76, label: 'TRAVEL' },
    parallax: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.62, label: 'PARALLAX' },
    rigScale: { type: 'range', min: 0.7, max: 1.3, step: 0.01, default: 1, label: 'RIG SCALE' },
    direction: { type: 'enum', options: ['left', 'right'], default: 'right', label: 'DIRECTION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
