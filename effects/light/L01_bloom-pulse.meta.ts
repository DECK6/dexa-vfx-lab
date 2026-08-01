import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L01',
  slug: 'bloom-pulse',
  name: 'Bloom Pulse',
  category: 'light',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['light', 'bloom', 'glow', 'pulse'],
  params: {
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'INTENSITY' },
    radius: { type: 'range', min: 2, max: 32, step: 1, default: 18, label: 'RADIUS' },
    speed: { type: 'range', min: 0.5, max: 3, step: 0.1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
