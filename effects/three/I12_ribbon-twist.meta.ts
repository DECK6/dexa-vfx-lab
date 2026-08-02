import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I12',
  slug: 'ribbon-twist',
  name: 'Ribbon Twist',
  category: 'three',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['three', 'ribbon', 'twist', 'helix'],
  params: {
    segments: { type: 'range', min: 12, max: 32, step: 2, default: 24, label: 'SEGMENTS' },
    twists: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'TWISTS' },
    depth: { type: 'range', min: 40, max: 180, step: 5, default: 110, label: 'DEPTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
