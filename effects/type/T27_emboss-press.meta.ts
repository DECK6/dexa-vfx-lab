import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T27',
  slug: 'emboss-press',
  name: 'Emboss Press',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['type', 'emboss', 'paper', 'press'],
  params: {
    phrase: { type: 'enum', options: ['DEXA', 'PRESSED', 'RELIEF'], default: 'DEXA', label: 'PHRASE' },
    depth: { type: 'range', min: 1, max: 12, step: 0.5, default: 6, label: 'DEPTH' },
    grain: { type: 'range', min: 0, max: 1, step: 0.05, default: 0.45, label: 'GRAIN' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
