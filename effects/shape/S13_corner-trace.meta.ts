import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S13',
  slug: 'corner-trace',
  name: 'Corner Trace',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['shape', 'corner', 'trace', 'frame'],
  params: {
    inset: { type: 'range', min: 4, max: 18, step: 0.5, default: 8, label: 'INSET' },
    armLength: { type: 'range', min: 10, max: 38, step: 1, default: 34, label: 'ARM LENGTH' },
    traceLength: { type: 'range', min: 0.12, max: 0.72, step: 0.01, default: 0.55, label: 'TRACE LENGTH' },
    thickness: { type: 'range', min: 1, max: 10, step: 0.5, default: 8, label: 'THICKNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
