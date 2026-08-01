import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E05',
  slug: 'scan-print',
  name: 'Scan Print',
  category: 'texture',
  kind: 'canvas',
  cost: 2,
  wave: 4,
  tags: ['texture', 'print', 'scanline', 'ink'],
  params: {
    density: { type: 'range', min: 3, max: 14, step: 1, default: 7, label: 'LINE DENSITY' },
    ink: { type: 'range', min: 0.1, max: 1, step: 0.01, default: 0.64, label: 'INK' },
    stains: { type: 'range', min: 3, max: 18, step: 1, default: 9, label: 'STAINS' },
    feed: { type: 'range', min: 0.5, max: 3, step: 0.1, default: 1.2, label: 'FEED SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
