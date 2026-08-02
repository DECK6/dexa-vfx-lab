import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T22',
  slug: 'neon-trace',
  name: 'Neon Trace',
  category: 'type',
  kind: 'react',
  cost: 2,
  wave: 9,
  tags: ['type', 'neon', 'trace', 'sequential'],
  params: {
    text: { type: 'enum', options: ['DEXA', 'TRACE', 'SIGNAL'], default: 'DEXA', label: 'TEXT' },
    trace: { type: 'range', min: 0.35, max: 0.8, step: 0.01, default: 0.58, label: 'TRACE' },
    glow: { type: 'range', min: 8, max: 36, step: 1, default: 24, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
