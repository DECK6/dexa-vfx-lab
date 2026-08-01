import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G20',
  slug: 'macroblock',
  name: 'Macroblock',
  category: 'glitch',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['glitch', 'macroblock', 'motion-vector', 'compression', 'webgl'],
  params: {
    blockSize: { type: 'range', min: 8, max: 48, step: 2, default: 20, label: 'BLOCK SIZE' },
    corruption: { type: 'range', min: 0.05, max: 0.9, step: 0.01, default: 0.46, label: 'CORRUPTION' },
    motion: { type: 'range', min: 2, max: 40, step: 1, default: 18, label: 'MOTION VECTOR' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
