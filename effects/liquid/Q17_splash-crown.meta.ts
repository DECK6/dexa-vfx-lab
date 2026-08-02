import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q17',
  slug: 'splash-crown',
  name: 'Splash Crown',
  category: 'liquid',
  kind: 'canvas',
  cost: 2,
  wave: 8,
  tags: ['liquid', 'splash', 'crown', 'droplets', 'impact'],
  params: {
    spikes: { type: 'range', min: 7, max: 18, step: 1, default: 12, label: 'CROWN SPIKES' },
    height: { type: 'range', min: 0.4, max: 1.5, step: 0.05, default: 0.92, label: 'SPLASH HEIGHT' },
    droplets: { type: 'range', min: 6, max: 24, step: 1, default: 14, label: 'DROPLETS' },
    glow: { type: 'range', min: 0, max: 24, step: 1, default: 10, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
