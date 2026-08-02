import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N19',
  slug: 'volcano-ember',
  name: 'Volcano Ember',
  category: 'nature',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['nature', 'volcano', 'ember', 'eruption', 'ballistic'],
  params: {
    count: { type: 'range', min: 24, max: 120, step: 1, default: 72, label: 'EMBERS' },
    eruption: { type: 'range', min: 0.35, max: 1, step: 0.01, default: 0.76, label: 'ERUPTION' },
    gravity: { type: 'range', min: 0.4, max: 1.4, step: 0.01, default: 0.92, label: 'GRAVITY' },
    cycles: { type: 'enum', options: ['1', '2', '3'], default: '2', label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
