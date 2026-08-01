import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L04',
  slug: 'anamorphic-flare',
  name: 'Anamorphic Flare',
  category: 'light',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['light', 'anamorphic', 'flare', 'streak', 'webgl'],
  params: {
    intensity: { type: 'range', min: 0, max: 2, step: 0.05, default: 1.15, label: 'INTENSITY' },
    width: { type: 'range', min: 0.2, max: 1.4, step: 0.05, default: 0.82, label: 'WIDTH' },
    streak: { type: 'range', min: 0.01, max: 0.12, step: 0.005, default: 0.045, label: 'STREAK' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
