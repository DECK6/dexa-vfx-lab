import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F15',
  slug: 'trailer-text',
  name: 'Trailer Text',
  category: 'cinema',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['cinema', 'trailer', 'typography', 'impact', 'title'],
  params: {
    title: { type: 'enum', options: ['DEXA VFX', 'DEXA VFX LAB', 'DEXA VFX / SIGNAL'], default: 'DEXA VFX', label: 'TITLE' },
    pace: { type: 'range', min: 2, max: 5, step: 1, default: 3, label: 'CUTS' },
    impact: { type: 'range', min: 0.2, max: 1, step: 0.05, default: 0.78, label: 'IMPACT' },
    tracking: { type: 'range', min: 0, max: 0.24, step: 0.01, default: 0.08, label: 'TRACKING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
