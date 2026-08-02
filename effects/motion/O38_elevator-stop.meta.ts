import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O38',
  slug: 'elevator-stop',
  name: 'Elevator Stop',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['motion', 'physics', 'elevator', 'overshoot', 'cable'],
  params: {
    travel: { type: 'range', min: 0.2, max: 0.58, step: 0.01, default: 0.42, label: 'TRAVEL' },
    overshoot: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.66, label: 'OVERSHOOT' },
    damping: { type: 'range', min: 2, max: 9, step: 0.1, default: 5.4, label: 'DAMPING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
