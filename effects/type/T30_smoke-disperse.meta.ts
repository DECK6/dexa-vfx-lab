import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T30',
  slug: 'smoke-disperse',
  name: 'Smoke Disperse',
  category: 'type',
  kind: 'canvas',
  cost: 2,
  wave: 9,
  tags: ['type', 'smoke', 'disperse', 'particles'],
  params: {
    particles: { type: 'range', min: 80, max: 420, step: 20, default: 240, label: 'PARTICLES' },
    drift: { type: 'range', min: 0.2, max: 1.4, step: 0.05, default: 0.75, label: 'DRIFT' },
    softness: { type: 'range', min: 0, max: 1, step: 0.05, default: 0.62, label: 'SOFTNESS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
