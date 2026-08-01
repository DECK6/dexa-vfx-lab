import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X14',
  slug: 'whip-pan',
  name: 'Whip Pan',
  category: 'trans',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['transition', 'pan', 'motion-blur'],
  params: {
    direction: { type: 'enum', options: ['left', 'right'], default: 'left', label: 'DIRECTION' },
    blur: { type: 'range', min: 0, max: 48, step: 1, default: 22, label: 'BLUR' },
    overshoot: { type: 'range', min: 0, max: 0.2, step: 0.01, default: 0.06, label: 'OVERSHOOT' },
    trails: { type: 'range', min: 2, max: 10, step: 1, default: 5, label: 'TRAILS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
