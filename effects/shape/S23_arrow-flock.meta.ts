import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S23',
  slug: 'arrow-flock',
  name: 'Arrow Flock',
  category: 'shape',
  kind: 'canvas',
  cost: 2,
  wave: 9,
  tags: ['shape', 'arrow', 'flock', 'alignment', 'direction'],
  params: {
    count: { type: 'range', min: 24, max: 110, step: 2, default: 64, label: 'COUNT' },
    alignment: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.74, label: 'ALIGNMENT' },
    drift: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.56, label: 'DRIFT' },
    size: { type: 'range', min: 5, max: 18, step: 1, default: 10, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
