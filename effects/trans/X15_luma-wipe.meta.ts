import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X15',
  slug: 'luma-wipe',
  name: 'Luma Wipe',
  category: 'trans',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['transition', 'luma', 'mask', 'wipe', 'webgl'],
  params: {
    softness: { type: 'range', min: 0.01, max: 0.25, step: 0.005, default: 0.085, label: 'SOFTNESS' },
    detail: { type: 'range', min: 1, max: 8, step: 0.1, default: 4.6, label: 'DETAIL' },
    direction: { type: 'enum', options: ['horizontal', 'vertical', 'diagonal'], default: 'diagonal', label: 'DIRECTION' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
