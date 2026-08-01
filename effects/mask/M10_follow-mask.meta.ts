import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M10',
  slug: 'follow-mask',
  name: 'Follow Mask',
  category: 'mask',
  kind: 'react',
  cost: 1,
  wave: 4,
  tags: ['mask', 'tracking', 'follow', 'window'],
  params: {
    radius: { type: 'range', min: 14, max: 34, step: 1, default: 23, label: 'RADIUS' },
    travel: { type: 'range', min: 8, max: 28, step: 1, default: 20, label: 'TRAVEL' },
    lag: { type: 'range', min: 0, max: 0.25, step: 0.01, default: 0.08, label: 'LAG' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
