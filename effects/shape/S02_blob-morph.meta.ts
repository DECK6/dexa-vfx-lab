import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S02',
  slug: 'blob-morph',
  name: 'Blob Morph',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['shape', 'blob', 'morph', 'organic'],
  params: {
    amplitude: { type: 'range', min: 0, max: 0.4, step: 0.01, default: 0.2, label: 'AMPLITUDE' },
    points: { type: 'range', min: 6, max: 12, step: 1, default: 8, label: 'POINTS' },
    softness: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'SOFTNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
