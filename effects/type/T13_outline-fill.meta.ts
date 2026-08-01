import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T13',
  slug: 'outline-fill',
  name: 'Outline Fill',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 3,
  tags: ['type', 'outline', 'fill', 'stroke', 'wipe'],
  params: {
    phrase: { type: 'enum', options: ['OUTLINE', 'FILL THE FRAME', 'SOLID SIGNAL'], default: 'OUTLINE', label: 'PHRASE' },
    cycles: { type: 'range', min: 1, max: 3, step: 1, default: 2, label: 'CYCLES' },
    outlineWidth: { type: 'range', min: 1, max: 6, step: 0.5, default: 3, label: 'OUTLINE' },
    glow: { type: 'range', min: 0, max: 30, step: 1, default: 16, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
