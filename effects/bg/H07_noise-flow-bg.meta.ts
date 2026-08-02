import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'H07',
  slug: 'noise-flow-bg',
  name: 'Noise Flow BG',
  category: 'bg',
  kind: 'webgl',
  cost: 1,
  wave: 9,
  tags: ['background', 'noise', 'flow', 'low-contrast', 'webgl'],
  params: {
    scale: { type: 'range', min: 1.4, max: 6, step: 0.1, default: 3.2, label: 'SCALE' },
    contrast: { type: 'range', min: 0.15, max: 0.8, step: 0.01, default: 0.38, label: 'CONTRAST' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
