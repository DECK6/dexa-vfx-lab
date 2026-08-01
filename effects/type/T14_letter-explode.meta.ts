import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T14',
  slug: 'letter-explode',
  name: 'Letter Explode',
  category: 'type',
  kind: 'react',
  cost: 2,
  wave: 3,
  tags: ['type', 'letter', 'explode', 'scatter'],
  params: {
    spread: { type: 'range', min: 0.08, max: 0.48, step: 0.01, default: 0.3, label: 'SPREAD' },
    spin: { type: 'range', min: 15, max: 240, step: 5, default: 125, label: 'SPIN' },
    depth: { type: 'range', min: 20, max: 180, step: 5, default: 95, label: 'DEPTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
