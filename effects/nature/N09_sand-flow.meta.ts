import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N09',
  slug: 'sand-flow',
  name: 'Sand Flow',
  category: 'nature',
  kind: 'canvas',
  cost: 3,
  wave: 4,
  tags: ['nature', 'sand', 'particle', 'deposition'],
  stateful: true,
  params: {
    count: { type: 'range', min: 120, max: 480, step: 10, default: 320, label: 'PARTICLES' },
    flow: { type: 'range', min: 0.35, max: 1.8, step: 0.05, default: 1, label: 'FLOW' },
    grainSize: { type: 'range', min: 0.8, max: 2.4, step: 0.05, default: 1.35, label: 'GRAIN SIZE' },
    spread: { type: 'range', min: 0.15, max: 0.8, step: 0.01, default: 0.46, label: 'SPREAD' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
