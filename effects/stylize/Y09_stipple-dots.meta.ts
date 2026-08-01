import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y09',
  slug: 'stipple-dots',
  name: 'Stipple Dots',
  category: 'stylize',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['stylize', 'stipple', 'dots', 'luminance', 'canvas'],
  params: {
    spacing: { type: 'range', min: 5, max: 14, step: 1, default: 8, label: 'SPACING' },
    dotSize: { type: 'range', min: 0.4, max: 2.8, step: 0.1, default: 1.5, label: 'DOT SIZE' },
    contrast: { type: 'range', min: 0.7, max: 2.4, step: 0.05, default: 1.4, label: 'CONTRAST' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
