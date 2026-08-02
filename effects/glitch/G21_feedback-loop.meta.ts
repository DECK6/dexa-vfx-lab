import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G21', slug: 'feedback-loop', name: 'Feedback Loop', category: 'glitch', kind: 'canvas', cost: 2, wave: 9,
  tags: ['glitch', 'feedback', 'recursive', 'tunnel', 'canvas'],
  params: {
    copies: { type: 'range', min: 5, max: 18, step: 1, default: 11, label: 'COPIES' },
    zoom: { type: 'range', min: 0.55, max: 0.88, step: 0.01, default: 0.72, label: 'ZOOM' },
    twist: { type: 'range', min: -0.25, max: 0.25, step: 0.01, default: 0.08, label: 'TWIST' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
