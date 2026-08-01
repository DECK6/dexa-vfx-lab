import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'R06',
  slug: 'wave-interference',
  name: 'Wave Interference',
  category: 'pattern',
  kind: 'webgl',
  cost: 2,
  wave: 3,
  tags: ['pattern', 'wave', 'interference', 'ripple', 'webgl'],
  params: {
    frequency: { type: 'range', min: 8, max: 32, step: 1, default: 19, label: 'FREQUENCY' },
    sources: { type: 'range', min: 2, max: 4, step: 1, default: 3, label: 'SOURCES' },
    contrast: { type: 'range', min: 0.4, max: 1.5, step: 0.05, default: 1, label: 'CONTRAST' },
    speed: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
