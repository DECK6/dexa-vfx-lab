import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T06',
  slug: 'word-cascade',
  name: 'Word Cascade',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['type', 'words', 'cascade', 'blur'],
  params: {
    phrase: { type: 'enum', options: ['MOTION MADE VISIBLE', 'DESIGN IN TIME', 'SIGNAL INTO FORM'], default: 'MOTION MADE VISIBLE', label: 'PHRASE' },
    stagger: { type: 'range', min: 0.05, max: 0.22, step: 0.01, default: 0.12, label: 'STAGGER' },
    blur: { type: 'range', min: 4, max: 24, step: 1, default: 14, label: 'BLUR' },
    rise: { type: 'range', min: 0.05, max: 0.3, step: 0.01, default: 0.16, label: 'RISE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
