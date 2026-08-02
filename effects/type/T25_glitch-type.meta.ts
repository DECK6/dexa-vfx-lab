import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T25',
  slug: 'glitch-type',
  name: 'Glitch Type',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['type', 'glitch', 'slice', 'shift', 'substitution'],
  params: {
    text: { type: 'enum', options: ['DEXA VFX', 'GLITCH', 'SIGNAL'], default: 'DEXA VFX', label: 'TEXT' },
    slices: { type: 'range', min: 5, max: 13, step: 1, default: 9, label: 'SLICES' },
    intensity: { type: 'range', min: 0.2, max: 1, step: 0.05, default: 0.72, label: 'INTENSITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
