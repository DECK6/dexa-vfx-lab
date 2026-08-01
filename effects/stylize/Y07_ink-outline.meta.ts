import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y07',
  slug: 'ink-outline',
  name: 'Ink Outline',
  category: 'stylize',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['stylize', 'ink', 'outline', 'comic', 'webgl'],
  params: {
    edgeWidth: { type: 'range', min: 0.5, max: 3.5, step: 0.1, default: 1.6, label: 'EDGE WIDTH' },
    ink: { type: 'range', min: 0.2, max: 1.4, step: 0.05, default: 0.9, label: 'INK' },
    toneScale: { type: 'range', min: 5, max: 18, step: 1, default: 10, label: 'TONE SCALE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
