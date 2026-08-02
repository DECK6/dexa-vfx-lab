import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T26',
  slug: 'handwrite-trace',
  name: 'Handwrite Trace',
  category: 'type',
  kind: 'react',
  cost: 2,
  wave: 9,
  tags: ['type', 'handwriting', 'trace', 'stroke'],
  params: {
    phrase: { type: 'enum', options: ['DEXA', 'SIGNAL', 'MOTION'], default: 'DEXA', label: 'PHRASE' },
    speed: { type: 'range', min: 0.6, max: 1.8, step: 0.05, default: 1, label: 'SPEED' },
    stroke: { type: 'range', min: 1, max: 6, step: 0.25, default: 2.5, label: 'STROKE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
