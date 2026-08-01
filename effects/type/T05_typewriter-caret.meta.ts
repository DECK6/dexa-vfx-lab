import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T05',
  slug: 'typewriter-caret',
  name: 'Typewriter Caret',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['type', 'typewriter', 'caret', 'terminal'],
  params: {
    phrase: { type: 'enum', options: ['DEXA SIGNAL', 'FRAME BY FRAME', 'MOTION SYSTEM'], default: 'DEXA SIGNAL', label: 'PHRASE' },
    speed: { type: 'range', min: 4, max: 20, step: 1, default: 11, label: 'SPEED' },
    caret: { type: 'enum', options: ['block', 'line', 'underscore'], default: 'block', label: 'CARET' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
