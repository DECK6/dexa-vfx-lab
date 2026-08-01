import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S10',
  slug: 'fractal-branch',
  name: 'Fractal Branch',
  category: 'shape',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['shape', 'fractal', 'branch', 'growth', 'canvas'],
  params: {
    depth: { type: 'range', min: 4, max: 8, step: 1, default: 7, label: 'DEPTH' },
    spread: { type: 'range', min: 12, max: 48, step: 1, default: 29, label: 'SPREAD' },
    decay: { type: 'range', min: 0.58, max: 0.78, step: 0.01, default: 0.69, label: 'DECAY' },
    weight: { type: 'range', min: 0.8, max: 7, step: 0.1, default: 3.2, label: 'WEIGHT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
