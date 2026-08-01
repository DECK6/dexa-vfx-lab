import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y08',
  slug: 'hatch-shade',
  name: 'Hatch Shade',
  category: 'stylize',
  kind: 'webgl',
  cost: 2,
  wave: 6,
  tags: ['stylize', 'hatching', 'luminance', 'shading', 'webgl'],
  params: {
    spacing: { type: 'range', min: 5, max: 18, step: 1, default: 9, label: 'SPACING' },
    lineWidth: { type: 'range', min: 0.6, max: 2.8, step: 0.1, default: 1.2, label: 'LINE WIDTH' },
    contrast: { type: 'range', min: 0.7, max: 2.2, step: 0.05, default: 1.35, label: 'CONTRAST' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
