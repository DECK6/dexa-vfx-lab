import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K09',
  slug: 'pixel-reveal',
  name: 'Pixel Reveal',
  category: 'retro',
  kind: 'canvas',
  cost: 1,
  wave: 6,
  tags: ['retro', 'pixel', 'reveal', 'transition'],
  params: {
    grid: { type: 'range', min: 8, max: 32, step: 1, default: 18, label: 'GRID' },
    order: { type: 'enum', options: ['scramble', 'radial', 'scan'], default: 'scramble', label: 'ORDER' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
