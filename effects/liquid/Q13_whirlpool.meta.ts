import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q13',
  slug: 'whirlpool',
  name: 'Whirlpool',
  category: 'liquid',
  kind: 'webgl',
  cost: 2,
  wave: 8,
  tags: ['liquid', 'whirlpool', 'vortex', 'suction', 'webgl'],
  params: {
    pull: { type: 'range', min: 0.1, max: 1, step: 0.01, default: 0.64, label: 'PULL' },
    spin: { type: 'enum', options: ['1', '2', '3'], default: '2', label: 'SPIN' },
    radius: { type: 'range', min: 0.25, max: 0.75, step: 0.01, default: 0.52, label: 'RADIUS' },
    depth: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.7, label: 'DEPTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
