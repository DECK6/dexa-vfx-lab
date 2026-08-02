import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F03',
  slug: 'film-burn',
  name: 'Film Burn',
  category: 'cinema',
  kind: 'webgl',
  cost: 2,
  wave: 7,
  tags: ['cinema', 'film', 'burn', 'transition', 'webgl'],
  params: {
    intensity: { type: 'range', min: 0.3, max: 1.4, step: 0.01, default: 0.92, label: 'INTENSITY' },
    turbulence: { type: 'range', min: 1, max: 6, step: 0.1, default: 3.4, label: 'TURBULENCE' },
    softness: { type: 'range', min: 0.02, max: 0.2, step: 0.01, default: 0.08, label: 'SOFTNESS' },
    direction: { type: 'enum', options: ['left', 'right', 'center'], default: 'left', label: 'DIRECTION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
