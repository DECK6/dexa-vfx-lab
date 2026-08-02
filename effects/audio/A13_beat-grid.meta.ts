import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A13',
  slug: 'beat-grid',
  name: 'Beat Grid',
  category: 'audio',
  kind: 'react',
  cost: 1,
  wave: 8,
  tags: ['audio', 'beat', 'grid', 'sequencer', 'cells'],
  params: {
    rows: { type: 'range', min: 4, max: 9, step: 1, default: 6, label: 'ROWS' },
    sensitivity: { type: 'range', min: 0.5, max: 2.4, step: 0.05, default: 1.3, label: 'SENSITIVITY' },
    steps: { type: 'enum', options: ['8', '16', '24'], default: '16', label: 'STEPS' },
    glow: { type: 'range', min: 0, max: 24, step: 1, default: 12, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
