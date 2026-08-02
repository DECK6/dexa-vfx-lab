import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A11',
  slug: 'spectrum-3d',
  name: 'Spectrum 3D',
  category: 'audio',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['audio', 'spectrum', '3d', 'terrain', 'perspective'],
  params: {
    gain: { type: 'range', min: 0.4, max: 2.5, step: 0.05, default: 1.35, label: 'GAIN' },
    rows: { type: 'range', min: 4, max: 10, step: 1, default: 7, label: 'DEPTH ROWS' },
    depth: { type: 'range', min: 80, max: 260, step: 5, default: 170, label: 'DEPTH' },
    tilt: { type: 'range', min: 42, max: 72, step: 1, default: 58, label: 'TILT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
