import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G04',
  slug: 'signal-loss',
  name: 'Signal Loss',
  category: 'glitch',
  kind: 'canvas',
  cost: 2,
  wave: 2,
  tags: ['glitch', 'signal', 'static', 'noise'],
  params: {
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'INTENSITY' },
    dropoutRate: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.46, label: 'DROPOUT RATE' },
    noiseScale: { type: 'range', min: 2, max: 10, step: 1, default: 4, label: 'NOISE SCALE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
