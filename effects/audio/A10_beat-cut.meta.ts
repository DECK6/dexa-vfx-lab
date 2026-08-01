import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A10',
  slug: 'beat-cut',
  name: 'Beat Cut',
  category: 'audio',
  kind: 'react',
  cost: 1,
  wave: 4,
  tags: ['audio', 'beat', 'cut', 'montage'],
  params: {
    sensitivity: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 1.2, label: 'SENSITIVITY' },
    tempo: { type: 'enum', options: ['slow', 'medium', 'fast'], default: 'medium', label: 'TEMPO' },
    cuts: { type: 'range', min: 3, max: 6, step: 1, default: 4, label: 'CUTS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
