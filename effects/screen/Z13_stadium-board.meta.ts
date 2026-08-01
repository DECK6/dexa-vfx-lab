import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z13',
  slug: 'stadium-board',
  name: 'Stadium Board',
  category: 'screen',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['screen', 'stadium', 'scoreboard', 'bitmap', 'panel-refresh'],
  params: {
    pixelSize: { type: 'range', min: 5, max: 16, step: 1, default: 9, label: 'PIXEL SIZE' },
    zoom: { type: 'range', min: 0, max: 0.28, step: 0.01, default: 0.12, label: 'ZOOM' },
    refresh: { type: 'range', min: 1, max: 8, step: 1, default: 4, label: 'REFRESH' },
    bloom: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.62, label: 'BLOOM' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
