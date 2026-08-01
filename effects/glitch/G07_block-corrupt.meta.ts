import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G07',
  slug: 'block-corrupt',
  name: 'Block Corrupt',
  category: 'glitch',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['glitch', 'macroblock', 'corrupt', 'digital'],
  params: {
    blockSize: { type: 'range', min: 8, max: 48, step: 1, default: 22, label: 'BLOCK SIZE' },
    corruption: { type: 'range', min: 0.1, max: 1, step: 0.01, default: 0.62, label: 'CORRUPTION' },
    displacement: { type: 'range', min: 4, max: 80, step: 1, default: 34, label: 'DISPLACEMENT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
