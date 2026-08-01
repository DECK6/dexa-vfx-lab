import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T17',
  slug: 'char-bounce-wave',
  name: 'Char Bounce Wave',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['type', 'bounce', 'wave', 'stagger', 'squash'],
  params: {
    text: { type: 'enum', options: ['DEXA VFX', 'BOUNCE WAVE', 'HOP THE LINE'], default: 'DEXA VFX', label: 'TEXT' },
    jump: { type: 'range', min: 0.15, max: 0.9, step: 0.01, default: 0.46, label: 'JUMP' },
    stagger: { type: 'range', min: 0.2, max: 1, step: 0.01, default: 0.72, label: 'STAGGER' },
    squash: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.55, label: 'SQUASH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
