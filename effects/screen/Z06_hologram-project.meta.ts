import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z06',
  slug: 'hologram-project',
  name: 'Hologram Project',
  category: 'screen',
  kind: 'react',
  cost: 1,
  wave: 6,
  tags: ['screen', 'hologram', 'projection', 'scanline', 'ghost'],
  params: {
    layers: { type: 'range', min: 2, max: 7, step: 1, default: 4, label: 'GHOSTS' },
    scanlines: { type: 'range', min: 3, max: 12, step: 1, default: 7, label: 'SCANLINES' },
    flicker: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.26, label: 'FLICKER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
