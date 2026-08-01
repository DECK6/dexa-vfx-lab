import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'G05',
  slug: 'vhs-tracking',
  name: 'VHS Tracking',
  category: 'glitch',
  kind: 'canvas',
  cost: 2,
  wave: 2,
  tags: ['glitch', 'vhs', 'tracking', 'color-bleed'],
  params: {
    tracking: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'TRACKING' },
    bleed: { type: 'range', min: 0, max: 16, step: 0.5, default: 6, label: 'COLOR BLEED' },
    scanlines: { type: 'toggle', default: true, label: 'SCANLINES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
