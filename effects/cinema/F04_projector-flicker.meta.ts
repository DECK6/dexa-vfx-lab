import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F04',
  slug: 'projector-flicker',
  name: 'Projector Flicker',
  category: 'cinema',
  kind: 'canvas',
  cost: 2,
  wave: 7,
  stateful: true,
  tags: ['cinema', 'projector', 'flicker', 'dust', 'canvas'],
  params: {
    flicker: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.48, label: 'FLICKER' },
    weave: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.56, label: 'GATE WEAVE' },
    dust: { type: 'range', min: 8, max: 42, step: 1, default: 24, label: 'DUST' },
    scratches: { type: 'range', min: 0, max: 6, step: 1, default: 3, label: 'SCRATCHES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
