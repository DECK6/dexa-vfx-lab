import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'M13', slug: 'venetian-sweep', name: 'Venetian Sweep', category: 'mask', kind: 'react', cost: 1, wave: 9,
  tags: ['mask', 'venetian', 'diagonal', 'slat', 'reveal'],
  params: {
    slats: { type: 'range', min: 5, max: 14, step: 1, default: 9, label: 'SLATS' },
    angle: { type: 'range', min: -24, max: 24, step: 1, default: -12, label: 'ANGLE' },
    stagger: { type: 'range', min: 0.1, max: 0.8, step: 0.01, default: 0.48, label: 'STAGGER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
