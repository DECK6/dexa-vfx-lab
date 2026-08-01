import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G12',
  slug: 'sync-roll',
  name: 'Sync Roll',
  category: 'glitch',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['glitch', 'sync', 'roll', 'vertical'],
  params: {
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    tear: { type: 'range', min: 0, max: 48, step: 1, default: 18, label: 'TEAR' },
    wobble: { type: 'range', min: 0, max: 20, step: 1, default: 7, label: 'WOBBLE' },
    direction: { type: 'enum', options: ['down', 'up'], default: 'down', label: 'DIRECTION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
