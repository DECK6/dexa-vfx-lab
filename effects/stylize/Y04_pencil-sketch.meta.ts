import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y04',
  slug: 'pencil-sketch',
  name: 'Pencil Sketch',
  category: 'stylize',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['stylize', 'pencil', 'sketch', 'hatching', 'contour'],
  params: {
    spacing: { type: 'range', min: 4, max: 16, step: 1, default: 8, label: 'HATCH SPACING' },
    edgeStrength: { type: 'range', min: 0.5, max: 3, step: 0.1, default: 1.7, label: 'EDGE STRENGTH' },
    graphite: { type: 'range', min: 0.3, max: 1.2, step: 0.05, default: 0.82, label: 'GRAPHITE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
