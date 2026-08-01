import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D15',
  slug: 'heat-haze',
  name: 'Heat Haze',
  category: 'distort',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['distort', 'heat', 'haze', 'refraction', 'webgl'],
  params: {
    strength: { type: 'range', min: 0.002, max: 0.06, step: 0.002, default: 0.024, label: 'STRENGTH' },
    scale: { type: 'range', min: 3, max: 14, step: 0.5, default: 7.5, label: 'CELL SCALE' },
    rise: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'RISE' },
    height: { type: 'range', min: 0.25, max: 1, step: 0.01, default: 0.72, label: 'HAZE HEIGHT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
