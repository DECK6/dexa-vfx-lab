import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E06',
  slug: 'duotone-map',
  name: 'Duotone Map',
  category: 'texture',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['texture', 'duotone', 'color'],
  params: {
    contrast: { type: 'range', min: 0.8, max: 2.8, step: 0.05, default: 1.65, label: 'CONTRAST' },
    mix: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.88, label: 'MIX' },
    shadow: { type: 'color', default: '#0D0E10', label: 'SHADOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
