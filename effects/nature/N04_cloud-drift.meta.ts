import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N04',
  slug: 'cloud-drift',
  name: 'Cloud Drift',
  category: 'nature',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['nature', 'cloud', 'drift', 'fbm', 'webgl'],
  params: {
    coverage: { type: 'range', min: 0.2, max: 0.85, step: 0.01, default: 0.58, label: 'COVERAGE' },
    density: { type: 'range', min: 0.3, max: 1, step: 0.01, default: 0.76, label: 'DENSITY' },
    scale: { type: 'range', min: 1.5, max: 6, step: 0.1, default: 3.2, label: 'SCALE' },
    speed: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
