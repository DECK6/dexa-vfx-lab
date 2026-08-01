import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T16',
  slug: 'justify-snap',
  name: 'Justify Snap',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 4,
  tags: ['type', 'justify', 'letter-spacing', 'spring'],
  params: {
    spread: { type: 'range', min: 0.1, max: 1, step: 0.01, default: 0.68, label: 'SPREAD' },
    overshoot: { type: 'range', min: 0, max: 0.4, step: 0.01, default: 0.18, label: 'OVERSHOOT' },
    guides: { type: 'toggle', default: true, label: 'GUIDES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
