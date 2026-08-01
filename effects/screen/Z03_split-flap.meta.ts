import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z03',
  slug: 'split-flap',
  name: 'Split Flap',
  category: 'screen',
  kind: 'react',
  cost: 2,
  wave: 6,
  tags: ['screen', 'split-flap', 'mechanical', 'airport', 'display'],
  params: {
    cells: { type: 'range', min: 4, max: 10, step: 1, default: 7, label: 'CELLS' },
    speed: { type: 'range', min: 1, max: 5, step: 0.25, default: 2, label: 'SPEED' },
    stagger: { type: 'range', min: 0, max: 0.8, step: 0.01, default: 0.34, label: 'STAGGER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
