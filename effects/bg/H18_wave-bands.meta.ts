import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H18',
  slug: 'wave-bands',
  name: 'Wave Bands',
  category: 'bg',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['background', 'wave', 'bands', 'parallax'],
  params: {
    bands: { type: 'range', min: 4, max: 10, step: 1, default: 7, label: 'BANDS' },
    amplitude: { type: 'range', min: 12, max: 54, step: 1, default: 30, label: 'AMPLITUDE' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
