import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K16',
  slug: 'console-boot',
  name: 'Console Boot',
  category: 'retro',
  kind: 'react',
  cost: 1,
  wave: 6,
  tags: ['retro', 'console', 'boot', 'logo-sequence', 'startup'],
  params: {
    scanlines: { type: 'range', min: 3, max: 10, step: 1, default: 6, label: 'SCANLINES' },
    bootSpeed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'BOOT SPEED' },
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.74, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
