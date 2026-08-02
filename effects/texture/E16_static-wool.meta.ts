import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'E16', slug: 'static-wool', name: 'Static Wool', category: 'texture', kind: 'canvas', cost: 2, wave: 9,
  tags: ['texture', 'wool', 'fiber', 'static', 'canvas'],
  params: {
    fibers: { type: 'range', min: 24, max: 90, step: 2, default: 58, label: 'FIBERS' },
    curl: { type: 'range', min: 4, max: 36, step: 1, default: 18, label: 'CURL' },
    charge: { type: 'range', min: 0.1, max: 1, step: 0.01, default: 0.62, label: 'CHARGE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
