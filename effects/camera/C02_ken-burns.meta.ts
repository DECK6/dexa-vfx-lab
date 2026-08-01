import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C02',
  slug: 'ken-burns',
  name: 'Ken Burns',
  category: 'camera',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['camera', 'zoom', 'pan'],
  params: {
    zoom: { type: 'range', min: 1, max: 1.6, step: 0.01, default: 1.25, label: 'ZOOM' },
    panX: { type: 'range', min: -1, max: 1, step: 0.01, default: 0.2, label: 'PAN X' },
    panY: { type: 'range', min: -1, max: 1, step: 0.01, default: -0.12, label: 'PAN Y' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
