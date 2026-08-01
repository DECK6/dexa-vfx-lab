import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G09',
  slug: 'interlace-tear',
  name: 'Interlace Tear',
  category: 'glitch',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['glitch', 'interlace', 'tear', 'scanline'],
  params: {
    lineHeight: { type: 'range', min: 1, max: 8, step: 1, default: 3, label: 'LINE HEIGHT' },
    tear: { type: 'range', min: 2, max: 64, step: 1, default: 28, label: 'TEAR' },
    bands: { type: 'range', min: 1, max: 8, step: 1, default: 4, label: 'BANDS' },
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'INTENSITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
