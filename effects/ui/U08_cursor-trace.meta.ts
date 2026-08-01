import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U08',
  slug: 'cursor-trace',
  name: 'Cursor Trace',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['ui', 'cursor', 'trace', 'pointer'],
  params: {
    trail: { type: 'range', min: 6, max: 18, step: 1, default: 12, label: 'TRAIL' },
    loops: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'LOOPS' },
    size: { type: 'range', min: 16, max: 52, step: 1, default: 32, label: 'SIZE' },
    spread: { type: 'range', min: 0.45, max: 1, step: 0.01, default: 0.82, label: 'SPREAD' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
