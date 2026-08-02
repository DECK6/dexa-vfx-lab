import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T33',
  slug: 'ribbon-text',
  name: 'Ribbon Text',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['type', 'ribbon', 'marquee', 'flow'],
  params: {
    phrase: { type: 'enum', options: ['DEXA SIGNAL', 'MOTION SYSTEM', 'ON AIR'], default: 'DEXA SIGNAL', label: 'PHRASE' },
    speed: { type: 'range', min: 0.5, max: 2.5, step: 0.1, default: 1.15, label: 'SPEED' },
    bend: { type: 'range', min: 0, max: 1, step: 0.05, default: 0.55, label: 'BEND' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
