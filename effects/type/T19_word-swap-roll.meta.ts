import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T19',
  slug: 'word-swap-roll',
  name: 'Word Swap Roll',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['type', 'words', 'roll', 'odometer', 'loop'],
  params: {
    words: {
      type: 'enum',
      options: ['DEXA VFX,MOTION,SIGNAL,SYSTEM', 'FRAME,SHUTTER,LENS', 'SIGNAL,INTO,FORM,DEXA'],
      default: 'DEXA VFX,MOTION,SIGNAL,SYSTEM',
      label: 'WORDS',
    },
    lead: { type: 'range', min: 0, max: 0.35, step: 0.01, default: 0.18, label: 'LEAD' },
    blur: { type: 'range', min: 0, max: 18, step: 1, default: 7, label: 'BLUR' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
