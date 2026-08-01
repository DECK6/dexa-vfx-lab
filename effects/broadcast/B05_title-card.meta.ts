import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B05',
  slug: 'title-card',
  name: 'Title Card',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'title-card', 'typography', 'editorial'],
  params: {
    title: { type: 'enum', options: ['DEXA VFX', 'DEXA MOTION', 'DEXA SIGNAL'], default: 'DEXA VFX', label: 'TITLE' },
    alignment: { type: 'enum', options: ['left', 'center', 'right'], default: 'center', label: 'ALIGNMENT' },
    lineWeight: { type: 'range', min: 1, max: 6, step: 1, default: 2, label: 'LINE WEIGHT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
