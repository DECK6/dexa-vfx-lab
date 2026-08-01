import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L06',
  slug: 'light-leak',
  name: 'Light Leak',
  category: 'light',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['light', 'film', 'leak', 'flare'],
  params: {
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'INTENSITY' },
    size: { type: 'range', min: 0.35, max: 1.4, step: 0.01, default: 0.82, label: 'SIZE' },
    drift: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'DRIFT' },
    source: { type: 'enum', options: ['left', 'right', 'orbit'], default: 'left', label: 'SOURCE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
