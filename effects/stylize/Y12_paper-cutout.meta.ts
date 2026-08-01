import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y12',
  slug: 'paper-cutout',
  name: 'Paper Cutout',
  category: 'stylize',
  kind: 'react',
  cost: 1,
  wave: 6,
  tags: ['stylize', 'paper', 'cutout', 'layers', 'react'],
  params: {
    layers: { type: 'range', min: 3, max: 7, step: 1, default: 5, label: 'LAYERS' },
    depth: { type: 'range', min: 2, max: 18, step: 1, default: 9, label: 'DEPTH' },
    shadow: { type: 'range', min: 4, max: 28, step: 1, default: 16, label: 'SHADOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
