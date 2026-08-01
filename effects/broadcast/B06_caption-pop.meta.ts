import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B06',
  slug: 'caption-pop',
  name: 'Caption Pop',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'caption', 'speech-bubble', 'pop'],
  params: {
    caption: { type: 'enum', options: ['DEXA VFX ON AIR', 'DEXA SIGNAL LOCKED', 'DEXA FRAME READY'], default: 'DEXA VFX ON AIR', label: 'CAPTION' },
    anchor: { type: 'enum', options: ['left', 'center', 'right'], default: 'left', label: 'ANCHOR' },
    bounce: { type: 'range', min: 0, max: 1, step: 0.05, default: 0.62, label: 'BOUNCE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
