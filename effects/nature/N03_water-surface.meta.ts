import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N03',
  slug: 'water-surface',
  name: 'Water Surface',
  category: 'nature',
  kind: 'webgl',
  cost: 2,
  wave: 2,
  tags: ['nature', 'water', 'ripple', 'refraction', 'webgl'],
  params: {
    amplitude: { type: 'range', min: 0, max: 0.08, step: 0.001, default: 0.026, label: 'AMPLITUDE' },
    frequency: { type: 'range', min: 2, max: 10, step: 0.1, default: 5.4, label: 'FREQUENCY' },
    caustics: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.62, label: 'CAUSTICS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
