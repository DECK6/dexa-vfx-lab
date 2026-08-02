import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H05',
  slug: 'topo-lines',
  name: 'Topo Lines',
  category: 'bg',
  kind: 'canvas',
  cost: 2,
  wave: 9,
  tags: ['background', 'topographic', 'contour', 'field', 'canvas'],
  params: {
    levels: { type: 'range', min: 8, max: 22, step: 1, default: 15, label: 'LEVELS' },
    detail: { type: 'range', min: 24, max: 56, step: 4, default: 40, label: 'DETAIL' },
    drift: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'DRIFT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
