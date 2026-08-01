import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T09',
  slug: 'char-flip-3d',
  name: 'Char Flip 3D',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['type', 'character', 'flip', '3d'],
  params: {
    phrase: { type: 'enum', options: ['DEXA VFX', 'FLIP TYPE', 'FRAME 180'], default: 'DEXA VFX', label: 'PHRASE' },
    stagger: { type: 'range', min: 0.03, max: 0.12, step: 0.01, default: 0.065, label: 'STAGGER' },
    depth: { type: 'range', min: 20, max: 140, step: 5, default: 80, label: 'DEPTH' },
    direction: { type: 'enum', options: ['forward', 'alternate'], default: 'alternate', label: 'DIRECTION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
