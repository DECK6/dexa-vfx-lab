import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M12',
  slug: 'noise-dissolve',
  name: 'Noise Dissolve',
  category: 'mask',
  kind: 'webgl',
  cost: 2,
  wave: 2,
  tags: ['mask', 'noise', 'dissolve', 'reveal', 'webgl'],
  params: {
    scale: { type: 'range', min: 2, max: 14, step: 0.1, default: 6.5, label: 'SCALE' },
    edgeWidth: { type: 'range', min: 0.01, max: 0.18, step: 0.005, default: 0.065, label: 'EDGE WIDTH' },
    grain: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.42, label: 'GRAIN' },
    mode: { type: 'enum', options: ['organic', 'vertical', 'radial'], default: 'organic', label: 'MODE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
