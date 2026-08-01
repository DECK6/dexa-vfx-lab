import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'N01',
  slug: 'fire-flame',
  name: 'Fire Flame',
  category: 'nature',
  kind: 'webgl',
  cost: 3,
  wave: 3,
  tags: ['nature', 'fire', 'flame', 'noise', 'webgl'],
  params: {
    intensity: { type: 'range', min: 0.35, max: 1.4, step: 0.05, default: 0.9, label: 'INTENSITY' },
    scale: { type: 'range', min: 2, max: 7, step: 0.1, default: 4.2, label: 'SCALE' },
    turbulence: { type: 'range', min: 0.2, max: 1.2, step: 0.05, default: 0.72, label: 'TURBULENCE' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
