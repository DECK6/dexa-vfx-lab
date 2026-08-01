import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z07',
  slug: 'teletext',
  name: 'Teletext',
  category: 'screen',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['screen', 'teletext', 'broadcast', 'mosaic', 'page-load'],
  params: {
    blockSize: { type: 'range', min: 8, max: 24, step: 1, default: 14, label: 'BLOCK SIZE' },
    loadSpeed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'LOAD SPEED' },
    colorBands: { type: 'range', min: 2, max: 6, step: 1, default: 4, label: 'COLOR BANDS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
