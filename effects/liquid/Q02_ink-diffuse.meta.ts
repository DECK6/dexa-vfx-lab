import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q02',
  slug: 'ink-diffuse',
  name: 'Ink Diffuse',
  category: 'liquid',
  kind: 'webgl',
  cost: 3,
  wave: 3,
  tags: ['liquid', 'ink', 'diffusion', 'fbm', 'webgl'],
  params: {
    spread: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.72, label: 'SPREAD' },
    turbulence: { type: 'range', min: 0.2, max: 1.4, step: 0.05, default: 0.88, label: 'TURBULENCE' },
    detail: { type: 'range', min: 2, max: 6, step: 0.1, default: 4.1, label: 'DETAIL' },
    speed: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
