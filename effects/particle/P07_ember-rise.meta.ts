import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P07',
  slug: 'ember-rise',
  name: 'Ember Rise',
  category: 'particle',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['particle', 'ember', 'rise', 'drift'],
  stateful: true,
  params: {
    count: { type: 'range', min: 24, max: 160, step: 1, default: 82, label: 'COUNT' },
    lift: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'LIFT' },
    turbulence: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.58, label: 'TURBULENCE' },
    size: { type: 'range', min: 1, max: 6, step: 0.1, default: 2.7, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
