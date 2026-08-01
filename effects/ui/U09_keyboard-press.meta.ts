import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U09',
  slug: 'keyboard-press',
  name: 'Keyboard Press',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['ui', 'keyboard', 'keycap', 'press'],
  params: {
    depth: { type: 'range', min: 8, max: 36, step: 1, default: 24, label: 'PRESS DEPTH' },
    size: { type: 'range', min: 0.65, max: 1.3, step: 0.01, default: 0.95, label: 'KEY SIZE' },
    cycles: { type: 'range', min: 1, max: 5, step: 1, default: 3, label: 'CYCLES' },
    rebound: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.62, label: 'REBOUND' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
