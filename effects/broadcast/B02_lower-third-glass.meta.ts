import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B02',
  slug: 'lower-third-glass',
  name: 'Lower Third Glass',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'lower-third', 'glass', 'blur'],
  params: {
    title: { type: 'enum', options: ['DEXA VFX', 'DEXA LAB', 'DEXA MOTION'], default: 'DEXA VFX', label: 'TITLE' },
    blur: { type: 'range', min: 4, max: 28, step: 1, default: 16, label: 'BLUR' },
    frost: { type: 'range', min: 0.1, max: 0.8, step: 0.05, default: 0.42, label: 'FROST' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
