import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q11',
  slug: 'drip-merge',
  name: 'Drip Merge',
  category: 'liquid',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['liquid', 'drip', 'merge', 'metaball', 'canvas'],
  params: {
    streams: { type: 'enum', options: ['3', '5', '7'], default: '5', label: 'STREAMS' },
    viscosity: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.72, label: 'VISCOSITY' },
    dropSize: { type: 'range', min: 0.6, max: 1.6, step: 0.05, default: 1, label: 'DROP SIZE' },
    cycles: { type: 'enum', options: ['1', '2', '3'], default: '2', label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
