import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G19',
  slug: 'time-quantize',
  name: 'Time Quantize',
  category: 'glitch',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['glitch', 'time-quantize', 'frame-hold', 'ghost', 'canvas'],
  params: {
    steps: { type: 'range', min: 4, max: 24, step: 1, default: 12, label: 'TIME STEPS' },
    ghosts: { type: 'range', min: 1, max: 5, step: 1, default: 3, label: 'GHOSTS' },
    jitter: { type: 'range', min: 2, max: 48, step: 1, default: 20, label: 'JITTER' },
    persistence: { type: 'range', min: 0.08, max: 0.55, step: 0.01, default: 0.28, label: 'PERSISTENCE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
