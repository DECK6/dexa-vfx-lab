import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A20',
  slug: 'vinyl-spin',
  name: 'Vinyl Spin',
  category: 'audio',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['audio', 'vinyl', 'record', 'turntable'],
  params: {
    turns: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'TURNS' },
    sensitivity: { type: 'range', min: 0.5, max: 2.5, step: 0.05, default: 1.3, label: 'SENSITIVITY' },
    groove: { type: 'range', min: 2, max: 8, step: 1, default: 4, label: 'GROOVE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
