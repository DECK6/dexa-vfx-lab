import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X16',
  slug: 'split-open',
  name: 'Split Open',
  category: 'trans',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['transition', 'split', 'reveal'],
  params: {
    travel: { type: 'range', min: 0.5, max: 1.2, step: 0.05, default: 1, label: 'TRAVEL' },
    edge: { type: 'range', min: 1, max: 12, step: 1, default: 4, label: 'EDGE' },
    depth: { type: 'range', min: 0, max: 0.18, step: 0.01, default: 0.06, label: 'DEPTH' },
    underlay: { type: 'enum', options: ['clean', 'dimmed', 'monochrome'], default: 'clean', label: 'UNDERLAY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
