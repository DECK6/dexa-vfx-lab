import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A09',
  slug: 'amplitude-warp',
  name: 'Amplitude Warp',
  category: 'audio',
  kind: 'webgl',
  cost: 2,
  wave: 4,
  tags: ['audio', 'amplitude', 'warp', 'spectrum', 'webgl'],
  params: {
    sensitivity: { type: 'range', min: 0.2, max: 2.5, step: 0.01, default: 1.25, label: 'SENSITIVITY' },
    bassWeight: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'BASS WEIGHT' },
    warpMode: { type: 'enum', options: ['radial', 'ribbon', 'twist'], default: 'radial', label: 'WARP MODE' },
    chroma: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.42, label: 'CHROMA' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
