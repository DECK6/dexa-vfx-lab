import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V25',
  slug: 'radial-bars',
  name: 'Radial Bars',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['data', 'radial', 'bars', 'polar'],
  params: {
    bars: { type: 'range', min: 12, max: 36, step: 1, default: 24, label: 'BARS' },
    length: { type: 'range', min: 0.45, max: 1, step: 0.01, default: 0.78, label: 'LENGTH' },
    thickness: { type: 'range', min: 4, max: 14, step: 1, default: 8, label: 'THICKNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
