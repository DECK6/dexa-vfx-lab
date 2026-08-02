import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N15',
  slug: 'ocean-swell',
  name: 'Ocean Swell',
  category: 'nature',
  kind: 'webgl',
  cost: 2,
  wave: 8,
  tags: ['nature', 'ocean', 'swell', 'horizon', 'webgl'],
  params: {
    amplitude: { type: 'range', min: 0.01, max: 0.08, step: 0.005, default: 0.042, label: 'AMPLITUDE' },
    layers: { type: 'range', min: 3, max: 5, step: 1, default: 5, label: 'LAYERS' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
