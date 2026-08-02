import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A18',
  slug: 'eq-tower',
  name: 'EQ Tower',
  category: 'audio',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['audio', 'equalizer', 'tower', 'mirror'],
  params: {
    gain: { type: 'range', min: 0.5, max: 2.5, step: 0.05, default: 1.35, label: 'GAIN' },
    segments: { type: 'range', min: 8, max: 18, step: 1, default: 13, label: 'SEGMENTS' },
    spread: { type: 'range', min: 0.55, max: 1.25, step: 0.05, default: 0.9, label: 'SPREAD' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
