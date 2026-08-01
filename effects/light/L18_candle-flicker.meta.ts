import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L18',
  slug: 'candle-flicker',
  name: 'Candle Flicker',
  category: 'light',
  kind: 'react',
  cost: 1,
  wave: 6,
  tags: ['light', 'candle', 'flame', 'flicker', 'shadow'],
  params: {
    intensity: { type: 'range', min: 0.15, max: 1, step: 0.01, default: 0.74, label: 'INTENSITY' },
    flicker: { type: 'range', min: 0.1, max: 1, step: 0.01, default: 0.68, label: 'FLICKER' },
    radius: { type: 'range', min: 20, max: 72, step: 1, default: 48, label: 'LIGHT RADIUS' },
    shadow: { type: 'range', min: 0, max: 24, step: 1, default: 12, label: 'SHADOW SWAY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
