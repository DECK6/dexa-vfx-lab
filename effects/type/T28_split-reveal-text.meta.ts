import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T28',
  slug: 'split-reveal-text',
  name: 'Split Reveal Text',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['type', 'split', 'reveal', 'alignment'],
  params: {
    phrase: { type: 'enum', options: ['DEXA VFX', 'LOCK SIGNAL', 'ALIGN'], default: 'DEXA VFX', label: 'PHRASE' },
    gap: { type: 'range', min: 0.05, max: 0.5, step: 0.01, default: 0.24, label: 'GAP' },
    skew: { type: 'range', min: 0, max: 18, step: 1, default: 7, label: 'SKEW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
