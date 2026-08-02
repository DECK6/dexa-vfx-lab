import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U16',
  slug: 'pull-refresh',
  name: 'Pull Refresh',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'refresh', 'overscroll', 'gesture'],
  params: {
    pull: { type: 'range', min: 0.6, max: 1.3, step: 0.01, default: 1, label: 'PULL' },
    threshold: { type: 'range', min: 0.45, max: 0.8, step: 0.01, default: 0.62, label: 'THRESHOLD' },
    style: { type: 'enum', options: ['arc', 'dots'], default: 'arc', label: 'SPINNER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
