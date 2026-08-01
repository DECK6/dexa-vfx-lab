import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T20',
  slug: 'char-gravity-fall',
  name: 'Char Gravity Fall',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['type', 'gravity', 'bounce', 'impact', 'stagger'],
  params: {
    text: { type: 'enum', options: ['DEXA VFX', 'DROP IN', 'HEAVY TYPE'], default: 'DEXA VFX', label: 'TEXT' },
    drop: { type: 'range', min: 0.2, max: 0.9, step: 0.01, default: 0.55, label: 'DROP' },
    bounce: { type: 'range', min: 0, max: 0.8, step: 0.01, default: 0.34, label: 'BOUNCE' },
    stagger: { type: 'range', min: 0.01, max: 0.09, step: 0.005, default: 0.05, label: 'STAGGER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
