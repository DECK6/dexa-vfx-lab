import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G02',
  slug: 'datamosh-slice',
  name: 'Datamosh Slice',
  category: 'glitch',
  kind: 'canvas',
  cost: 2,
  wave: 1,
  tags: ['glitch', 'datamosh', 'slice', 'channel'],
  params: {
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'INTENSITY' },
    sliceHeight: { type: 'range', min: 6, max: 64, step: 1, default: 22, label: 'SLICE HEIGHT' },
    maxShift: { type: 'range', min: 4, max: 180, step: 1, default: 72, label: 'MAX SHIFT' },
    channelOffset: { type: 'range', min: 0, max: 24, step: 1, default: 8, label: 'CHANNEL OFFSET' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
