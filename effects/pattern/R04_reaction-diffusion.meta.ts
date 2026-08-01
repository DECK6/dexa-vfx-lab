import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R04',
  slug: 'reaction-diffusion',
  name: 'Reaction Diffusion',
  category: 'pattern',
  kind: 'webgl',
  cost: 3,
  wave: 4,
  tags: ['pattern', 'reaction-diffusion', 'organic', 'noise', 'webgl'],
  params: {
    scale: { type: 'range', min: 2, max: 9, step: 0.25, default: 4.8, label: 'SCALE' },
    growth: { type: 'range', min: 0.2, max: 1.2, step: 0.05, default: 0.82, label: 'GROWTH' },
    detail: { type: 'range', min: 0.2, max: 1.4, step: 0.05, default: 0.9, label: 'DETAIL' },
    speed: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
