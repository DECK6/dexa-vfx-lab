import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'D09',
  slug: 'turbulent-noise',
  name: 'Turbulent Noise',
  category: 'distort',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['distort', 'turbulence', 'noise', 'fbm', 'webgl'],
  params: {
    strength: { type: 'range', min: 0, max: 0.18, step: 0.005, default: 0.095, label: 'STRENGTH' },
    scale: { type: 'range', min: 1.5, max: 9, step: 0.1, default: 4.6, label: 'SCALE' },
    flow: { type: 'range', min: 0.2, max: 1.4, step: 0.05, default: 0.85, label: 'FLOW' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
