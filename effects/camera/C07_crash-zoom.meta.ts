import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'C07',
  slug: 'crash-zoom',
  name: 'Crash Zoom',
  category: 'camera',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['camera', 'zoom', 'impact'],
  params: {
    zoom: { type: 'range', min: 1.2, max: 3.5, step: 0.05, default: 2.35, label: 'ZOOM' },
    snap: { type: 'range', min: 0.05, max: 0.22, step: 0.01, default: 0.11, label: 'SNAP' },
    smear: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'SMEAR' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
