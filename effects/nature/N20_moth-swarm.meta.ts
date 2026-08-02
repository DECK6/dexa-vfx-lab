import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N20',
  slug: 'moth-swarm',
  name: 'Moth Swarm',
  category: 'nature',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['nature', 'moth', 'swarm', 'light', 'orbit'],
  params: {
    count: { type: 'range', min: 10, max: 48, step: 1, default: 28, label: 'MOTHS' },
    attraction: { type: 'range', min: 0.25, max: 1, step: 0.01, default: 0.68, label: 'ATTRACTION' },
    flutter: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.72, label: 'FLUTTER' },
    size: { type: 'range', min: 1.5, max: 6, step: 0.1, default: 3.4, label: 'SIZE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
