import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H19',
  slug: 'nebula-cloud',
  name: 'Nebula Cloud',
  category: 'bg',
  kind: 'webgl',
  cost: 2,
  wave: 9,
  tags: ['background', 'nebula', 'cloud', 'space', 'depth'],
  params: {
    scale: { type: 'range', min: 1.5, max: 5, step: 0.1, default: 2.8, label: 'SCALE' },
    density: { type: 'range', min: 0.3, max: 1.4, step: 0.05, default: 0.9, label: 'DENSITY' },
    rotation: { type: 'range', min: 0.5, max: 2, step: 0.1, default: 1, label: 'ROTATION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
