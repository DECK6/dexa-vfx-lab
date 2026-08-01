import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B01',
  slug: 'lower-third-slide',
  name: 'Lower Third Slide',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'lower-third', 'slide', 'typography'],
  params: {
    title: { type: 'enum', options: ['DEXA VFX', 'DEXA SIGNAL', 'DEXA STUDIO'], default: 'DEXA VFX', label: 'TITLE' },
    speed: { type: 'range', min: 0.6, max: 1.8, step: 0.05, default: 1, label: 'SPEED' },
    accentWidth: { type: 'range', min: 0.04, max: 0.16, step: 0.01, default: 0.08, label: 'ACCENT WIDTH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
