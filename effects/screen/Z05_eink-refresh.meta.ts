import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z05',
  slug: 'eink-refresh',
  name: 'E-ink Refresh',
  category: 'screen',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['screen', 'eink', 'refresh', 'ghosting', 'dither'],
  params: {
    grain: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.42, label: 'GRAIN' },
    bands: { type: 'range', min: 3, max: 14, step: 1, default: 8, label: 'BANDS' },
    ghosting: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.56, label: 'GHOSTING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
