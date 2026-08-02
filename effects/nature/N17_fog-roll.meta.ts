import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N17',
  slug: 'fog-roll',
  name: 'Fog Roll',
  category: 'nature',
  kind: 'webgl',
  cost: 2,
  wave: 8,
  tags: ['nature', 'fog', 'mist', 'lowland', 'webgl'],
  params: {
    density: { type: 'range', min: 0.25, max: 1, step: 0.01, default: 0.72, label: 'DENSITY' },
    layers: { type: 'range', min: 2, max: 5, step: 1, default: 4, label: 'LAYERS' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
