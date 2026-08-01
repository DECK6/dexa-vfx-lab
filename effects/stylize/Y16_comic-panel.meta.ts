import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Y16',
  slug: 'comic-panel',
  name: 'Comic Panel',
  category: 'stylize',
  kind: 'react',
  cost: 2,
  wave: 6,
  tags: ['stylize', 'comic', 'panel', 'action-lines', 'react'],
  params: {
    layout: { type: 'enum', options: ['triptych', 'diagonal'], default: 'triptych', label: 'LAYOUT' },
    punch: { type: 'range', min: 0.4, max: 1.4, step: 0.01, default: 0.92, label: 'PUNCH' },
    ink: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.82, label: 'INK' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
