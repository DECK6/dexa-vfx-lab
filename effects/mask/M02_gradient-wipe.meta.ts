import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M02',
  slug: 'gradient-wipe',
  name: 'Gradient Wipe',
  category: 'mask',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['mask', 'gradient', 'wipe'],
  params: {
    direction: { type: 'enum', options: ['right', 'left', 'down', 'up'], default: 'right', label: 'DIRECTION' },
    softness: { type: 'range', min: 2, max: 30, step: 1, default: 14, label: 'SOFTNESS' },
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'GLOW' },
    cycles: { type: 'enum', options: ['1', '2', '3'], default: '1', label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
