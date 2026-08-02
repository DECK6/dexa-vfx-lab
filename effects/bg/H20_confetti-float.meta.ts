import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H20',
  slug: 'confetti-float',
  name: 'Confetti Float',
  category: 'bg',
  kind: 'canvas',
  cost: 1,
  wave: 9,
  tags: ['background', 'confetti', 'float', 'zero-gravity'],
  params: {
    count: { type: 'range', min: 18, max: 72, step: 1, default: 42, label: 'COUNT' },
    drift: { type: 'range', min: 0.4, max: 1.8, step: 0.1, default: 1, label: 'DRIFT' },
    size: { type: 'range', min: 3, max: 12, step: 0.5, default: 7, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
