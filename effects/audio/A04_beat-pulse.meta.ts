import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A04',
  slug: 'beat-pulse',
  name: 'Beat Pulse',
  category: 'audio',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['audio', 'beat', 'pulse'],
  params: {
    sensitivity: { type: 'range', min: 0.4, max: 2.4, step: 0.05, default: 1.35, label: 'SENSITIVITY' },
    bassWeight: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.7, label: 'BASS WEIGHT' },
    response: { type: 'enum', options: ['smooth', 'punchy', 'sub'], default: 'punchy', label: 'RESPONSE' },
    tempo: { type: 'enum', options: ['slow', 'medium', 'fast'], default: 'medium', label: 'TEMPO' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
