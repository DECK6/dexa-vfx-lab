import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y06',
  slug: 'posterize-pop',
  name: 'Posterize Pop',
  category: 'stylize',
  kind: 'webgl',
  cost: 1,
  wave: 6,
  tags: ['stylize', 'posterize', 'pop-art', 'subtractive', 'color-separation'],
  params: {
    levels: { type: 'range', min: 2, max: 5, step: 1, default: 3, label: 'COLOR LEVELS' },
    offset: { type: 'range', min: 0, max: 14, step: 1, default: 6, label: 'PLATE OFFSET' },
    contrast: { type: 'range', min: 0.7, max: 2, step: 0.05, default: 1.35, label: 'CONTRAST' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
