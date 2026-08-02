import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X19', slug: 'ink-bleed-trans', name: 'Ink Bleed Trans', category: 'trans', kind: 'webgl', cost: 2, wave: 9,
  tags: ['transition', 'ink', 'bleed', 'diffusion', 'webgl'],
  params: {
    spread: { type: 'range', min: 0.5, max: 1.5, step: 0.05, default: 1, label: 'SPREAD' },
    feather: { type: 'range', min: 0.01, max: 0.16, step: 0.01, default: 0.075, label: 'FEATHER' },
    fibers: { type: 'range', min: 2, max: 8, step: 1, default: 5, label: 'FIBERS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
