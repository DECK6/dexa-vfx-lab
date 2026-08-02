import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R19',
  slug: 'quasicrystal',
  name: 'Quasicrystal',
  category: 'pattern',
  kind: 'webgl',
  cost: 2,
  wave: 9,
  tags: ['pattern', 'quasicrystal', 'plane-wave', 'webgl'],
  params: {
    symmetry: { type: 'enum', options: ['5', '7', '9'], default: '5', label: 'SYMMETRY' },
    frequency: { type: 'range', min: 8, max: 30, step: 1, default: 17, label: 'FREQUENCY' },
    contrast: { type: 'range', min: 0.4, max: 1.6, step: 0.05, default: 1.05, label: 'CONTRAST' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
