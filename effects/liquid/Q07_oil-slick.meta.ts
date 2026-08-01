import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q07',
  slug: 'oil-slick',
  name: 'Oil Slick',
  category: 'liquid',
  kind: 'webgl',
  cost: 2,
  wave: 4,
  tags: ['liquid', 'oil', 'thin-film', 'iridescence', 'webgl'],
  params: {
    scale: { type: 'range', min: 1.5, max: 7, step: 0.1, default: 3.8, label: 'SCALE' },
    thickness: { type: 'range', min: 0.2, max: 2, step: 0.01, default: 1.08, label: 'THICKNESS' },
    iridescence: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.84, label: 'IRIDESCENCE' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
