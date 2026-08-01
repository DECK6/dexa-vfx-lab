import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T10',
  slug: 'highlight-sweep',
  name: 'Highlight Sweep',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['type', 'highlight', 'marker', 'sweep'],
  params: {
    phrase: { type: 'enum', options: ['MAKE MOTION VISIBLE', 'MARK THE SIGNAL', 'DESIGN THE MOMENT'], default: 'MAKE MOTION VISIBLE', label: 'PHRASE' },
    duration: { type: 'range', min: 0.2, max: 0.65, step: 0.01, default: 0.42, label: 'DURATION' },
    thickness: { type: 'range', min: 0.35, max: 1, step: 0.01, default: 0.72, label: 'THICKNESS' },
    direction: { type: 'enum', options: ['left', 'right'], default: 'left', label: 'DIRECTION' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
