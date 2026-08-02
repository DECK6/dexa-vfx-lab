import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I05',
  slug: 'wireframe-globe',
  name: 'Wireframe Globe',
  category: 'three',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['three', 'globe', 'wireframe', 'latitude', 'markers'],
  params: {
    grid: { type: 'range', min: 5, max: 12, step: 1, default: 8, label: 'GRID' },
    size: { type: 'range', min: 0.34, max: 0.7, step: 0.01, default: 0.54, label: 'SIZE' },
    turns: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'TURNS' },
    markerSize: { type: 'range', min: 3, max: 12, step: 0.5, default: 6, label: 'MARKER SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
