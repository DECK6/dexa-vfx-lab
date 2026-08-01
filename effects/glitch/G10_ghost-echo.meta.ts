import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G10',
  slug: 'ghost-echo',
  name: 'Ghost Echo',
  category: 'glitch',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['glitch', 'echo', 'trail', 'signal'],
  params: {
    echoes: { type: 'range', min: 2, max: 8, step: 1, default: 5, label: 'ECHOES' },
    distance: { type: 'range', min: 4, max: 64, step: 1, default: 28, label: 'DISTANCE' },
    spacing: { type: 'range', min: 0.02, max: 0.16, step: 0.01, default: 0.07, label: 'SPACING' },
    decay: { type: 'range', min: 0.3, max: 0.85, step: 0.01, default: 0.62, label: 'DECAY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
