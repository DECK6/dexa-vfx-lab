import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L15',
  slug: 'volumetric-spot',
  name: 'Volumetric Spot',
  category: 'light',
  kind: 'react',
  cost: 2,
  wave: 6,
  tags: ['light', 'volumetric', 'spotlight', 'stage', 'dust'],
  params: {
    intensity: { type: 'range', min: 0.15, max: 1, step: 0.01, default: 0.78, label: 'INTENSITY' },
    spread: { type: 'range', min: 18, max: 62, step: 1, default: 42, label: 'CONE SPREAD' },
    dust: { type: 'range', min: 8, max: 42, step: 1, default: 24, label: 'DUST' },
    sweep: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SWEEP' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
