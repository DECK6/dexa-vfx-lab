import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O25',
  slug: 'glitch-pop',
  name: 'Glitch Pop',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['motion', 'glitch', 'pop', 'rgb-split'],
  params: {
    pop: { type: 'range', min: 1.05, max: 1.5, step: 0.01, default: 1.22, label: 'POP' },
    split: { type: 'range', min: 2, max: 30, step: 1, default: 14, label: 'SPLIT' },
    flash: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.6, label: 'FLASH' },
    cycles: { type: 'range', min: 2, max: 3, step: 1, default: 3, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
