import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G08',
  slug: 'bit-crush',
  name: 'Bit Crush',
  category: 'glitch',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['glitch', 'bit-depth', 'quantize', 'pixel', 'webgl'],
  params: {
    bitDepth: { type: 'range', min: 2, max: 8, step: 1, default: 4, label: 'BIT DEPTH' },
    blockSize: { type: 'range', min: 2, max: 20, step: 1, default: 8, label: 'BLOCK SIZE' },
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.86, label: 'INTENSITY' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
