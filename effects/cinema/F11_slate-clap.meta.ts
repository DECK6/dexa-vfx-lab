import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F11',
  slug: 'slate-clap',
  name: 'Slate Clap',
  category: 'cinema',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['cinema', 'slate', 'clapperboard', 'production', 'typography'],
  params: {
    label: { type: 'enum', options: ['DEXA VFX', 'DEXA LAB', 'VFX UNIT'], default: 'DEXA VFX', label: 'TITLE' },
    take: { type: 'range', min: 1, max: 12, step: 1, default: 7, label: 'TAKE' },
    snap: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1.2, label: 'SNAP' },
    scale: { type: 'range', min: 0.7, max: 1.15, step: 0.01, default: 0.92, label: 'SCALE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
