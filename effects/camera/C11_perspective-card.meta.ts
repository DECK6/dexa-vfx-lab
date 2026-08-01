import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C11',
  slug: 'perspective-card',
  name: 'Perspective Card',
  category: 'camera',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['camera', 'perspective', 'card'],
  params: {
    tilt: { type: 'range', min: 2, max: 24, step: 0.5, default: 13, label: 'TILT' },
    perspective: { type: 'range', min: 420, max: 1800, step: 20, default: 920, label: 'PERSPECTIVE' },
    lift: { type: 'range', min: 0, max: 48, step: 1, default: 24, label: 'LIFT' },
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.46, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
