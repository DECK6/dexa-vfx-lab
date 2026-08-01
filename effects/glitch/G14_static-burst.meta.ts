import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G14',
  slug: 'static-burst',
  name: 'Static Burst',
  category: 'glitch',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['glitch', 'static', 'noise', 'burst'],
  params: {
    density: { type: 'range', min: 0.05, max: 0.8, step: 0.01, default: 0.36, label: 'DENSITY' },
    grainSize: { type: 'range', min: 1, max: 6, step: 1, default: 2, label: 'GRAIN SIZE' },
    burstRate: { type: 'range', min: 2, max: 10, step: 1, default: 6, label: 'BURST RATE' },
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.82, label: 'INTENSITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
