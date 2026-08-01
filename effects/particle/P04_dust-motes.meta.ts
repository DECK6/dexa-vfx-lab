import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'P04',
  slug: 'dust-motes',
  name: 'Dust Motes',
  category: 'particle',
  kind: 'canvas',
  cost: 1,
  wave: 2,
  tags: ['particle', 'dust', 'motes', 'ambient'],
  stateful: true,
  params: {
    count: { type: 'range', min: 16, max: 96, step: 1, default: 52, label: 'COUNT' },
    drift: { type: 'range', min: 0.2, max: 1.5, step: 0.05, default: 0.65, label: 'DRIFT' },
    size: { type: 'range', min: 0.5, max: 4, step: 0.1, default: 1.8, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
