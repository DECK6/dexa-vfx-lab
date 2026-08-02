import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U13',
  slug: 'toast-queue',
  name: 'Toast Queue',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'toast', 'queue', 'notification'],
  params: {
    count: { type: 'range', min: 3, max: 5, step: 1, default: 4, label: 'TOASTS' },
    lifetime: { type: 'range', min: 0.5, max: 1.5, step: 0.05, default: 1, label: 'LIFETIME' },
    side: { type: 'enum', options: ['right', 'left'], default: 'right', label: 'EXIT SIDE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
