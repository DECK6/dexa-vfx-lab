import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C12',
  slug: 'follow-track',
  name: 'Follow Track',
  category: 'camera',
  kind: 'react',
  cost: 1,
  wave: 4,
  tags: ['camera', 'tracking', 'follow', 'target'],
  params: {
    travel: { type: 'range', min: 0.2, max: 0.9, step: 0.01, default: 0.62, label: 'TRAVEL' },
    follow: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.72, label: 'FOLLOW' },
    reticle: { type: 'toggle', default: true, label: 'RETICLE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
