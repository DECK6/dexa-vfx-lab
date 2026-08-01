import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'O13',
  slug: 'magnetic-snap',
  name: 'Magnetic Snap',
  category: 'motion',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['physics', 'magnet', 'snap', 'attract'],
  params: {
    pull: { type: 'range', min: 0.12, max: 0.42, step: 0.01, default: 0.3, label: 'PULL' },
    sharpness: { type: 'range', min: 1.4, max: 5, step: 0.1, default: 3.2, label: 'SHARPNESS' },
    rings: { type: 'range', min: 1, max: 4, step: 1, default: 3, label: 'FIELD RINGS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
