import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M15', slug: 'shatter-mask', name: 'Shatter Mask', category: 'mask', kind: 'canvas', cost: 2, wave: 9,
  tags: ['mask', 'shatter', 'glass', 'fragment', 'canvas'],
  params: {
    shards: { type: 'range', min: 3, max: 6, step: 1, default: 4, label: 'COLUMNS' },
    spread: { type: 'range', min: 20, max: 180, step: 5, default: 92, label: 'SPREAD' },
    spin: { type: 'range', min: 0, max: 0.5, step: 0.01, default: 0.18, label: 'SPIN' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
