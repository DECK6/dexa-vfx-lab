import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y05',
  slug: 'cel-shade',
  name: 'Cel Shade',
  category: 'stylize',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['stylize', 'cel-shading', 'toon', 'bands', 'ink-outline'],
  params: {
    levels: { type: 'range', min: 2, max: 6, step: 1, default: 4, label: 'TONE LEVELS' },
    outline: { type: 'range', min: 0.5, max: 3, step: 0.1, default: 1.6, label: 'OUTLINE' },
    saturation: { type: 'range', min: 0.5, max: 1.8, step: 0.05, default: 1.2, label: 'SATURATION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
