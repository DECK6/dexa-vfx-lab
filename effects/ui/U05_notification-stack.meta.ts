import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U05',
  slug: 'notification-stack',
  name: 'Notification Stack',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['ui', 'notification', 'card', 'stack'],
  params: {
    cards: { type: 'range', min: 3, max: 6, step: 1, default: 4, label: 'CARDS' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    depth: { type: 'range', min: 0.4, max: 1, step: 0.01, default: 0.74, label: 'DEPTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
