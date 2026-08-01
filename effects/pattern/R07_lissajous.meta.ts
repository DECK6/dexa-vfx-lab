import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R07',
  slug: 'lissajous',
  name: 'Lissajous',
  category: 'pattern',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['pattern', 'lissajous', 'curve', 'oscilloscope'],
  params: {
    ratio: { type: 'enum', options: ['3:2', '5:4', '5:3', '7:4'], default: '3:2', label: 'RATIO' },
    trails: { type: 'range', min: 1, max: 7, step: 1, default: 4, label: 'TRAILS' },
    scale: { type: 'range', min: 0.55, max: 0.96, step: 0.01, default: 0.82, label: 'SCALE' },
    lineWidth: { type: 'range', min: 0.6, max: 4, step: 0.1, default: 1.6, label: 'LINE WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
