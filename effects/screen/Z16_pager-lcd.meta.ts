import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z16',
  slug: 'pager-lcd',
  name: 'Pager LCD',
  category: 'screen',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['screen', 'pager', 'lcd', 'monochrome', 'ghosting'],
  params: {
    pixelSize: { type: 'range', min: 3, max: 10, step: 1, default: 5, label: 'PIXEL SIZE' },
    contrast: { type: 'range', min: 0.4, max: 1, step: 0.01, default: 0.82, label: 'CONTRAST' },
    ghosting: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.54, label: 'GHOSTING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
