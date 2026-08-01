import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G11',
  slug: 'compression-artifact',
  name: 'Compression Artifact',
  category: 'glitch',
  kind: 'webgl',
  cost: 2,
  wave: 4,
  tags: ['glitch', 'compression', 'jpeg', 'block', 'webgl'],
  params: {
    quality: { type: 'range', min: 0.05, max: 1, step: 0.01, default: 0.42, label: 'QUALITY' },
    blockSize: { type: 'range', min: 4, max: 24, step: 1, default: 8, label: 'BLOCK SIZE' },
    ringing: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.62, label: 'RINGING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
