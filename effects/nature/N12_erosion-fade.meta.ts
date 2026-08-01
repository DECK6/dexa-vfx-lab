import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N12',
  slug: 'erosion-fade',
  name: 'Erosion Fade',
  category: 'nature',
  kind: 'webgl',
  cost: 2,
  wave: 4,
  tags: ['nature', 'erosion', 'dissolve', 'noise', 'webgl'],
  params: {
    scale: { type: 'range', min: 2, max: 10, step: 0.25, default: 5.5, label: 'SCALE' },
    edgeWidth: { type: 'range', min: 0.02, max: 0.18, step: 0.01, default: 0.075, label: 'EDGE WIDTH' },
    roughness: { type: 'range', min: 0.2, max: 1.2, step: 0.05, default: 0.78, label: 'ROUGHNESS' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
