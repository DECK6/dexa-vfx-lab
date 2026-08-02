import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T24',
  slug: 'shadow-pop-3d',
  name: 'Shadow Pop 3D',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['type', 'shadow', '3d', 'extrude', 'pop'],
  params: {
    text: { type: 'enum', options: ['POP', 'DEXA', 'DEPTH'], default: 'POP', label: 'TEXT' },
    depth: { type: 'range', min: 4, max: 18, step: 1, default: 11, label: 'DEPTH' },
    angle: { type: 'range', min: -14, max: 14, step: 1, default: -6, label: 'ANGLE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
