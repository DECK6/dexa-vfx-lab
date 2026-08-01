import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G03',
  slug: 'crt-scanline',
  name: 'CRT Scanline',
  category: 'glitch',
  kind: 'canvas',
  cost: 2,
  wave: 1,
  tags: ['glitch', 'crt', 'scanline', 'analog'],
  params: {
    intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'INTENSITY' },
    density: { type: 'range', min: 2, max: 10, step: 1, default: 4, label: 'DENSITY' },
    rollSpeed: { type: 'range', min: 1, max: 5, step: 1, default: 3, label: 'ROLL SPEED' },
    jitter: { type: 'range', min: 0, max: 12, step: 0.1, default: 2.4, label: 'JITTER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
