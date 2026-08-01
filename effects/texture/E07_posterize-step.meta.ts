import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E07',
  slug: 'posterize-step',
  name: 'Posterize Step',
  category: 'texture',
  kind: 'webgl',
  cost: 1,
  wave: 2,
  tags: ['texture', 'posterize', 'quantize', 'steps', 'webgl'],
  params: {
    levels: { type: 'range', min: 2, max: 10, step: 1, default: 4, label: 'LEVELS' },
    contrast: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1.2, label: 'CONTRAST' },
    mix: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.9, label: 'MIX' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
