import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G15',
  slug: 'frame-drop',
  name: 'Frame Drop',
  category: 'glitch',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['glitch', 'frame', 'drop', 'stutter'],
  params: {
    hold: { type: 'range', min: 2, max: 12, step: 1, default: 6, label: 'HOLD FRAMES' },
    motion: { type: 'range', min: 4, max: 64, step: 1, default: 30, label: 'MOTION' },
    jitter: { type: 'range', min: 0, max: 18, step: 1, default: 6, label: 'JITTER' },
    axis: { type: 'enum', options: ['horizontal', 'vertical', 'rotate'], default: 'horizontal', label: 'AXIS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
