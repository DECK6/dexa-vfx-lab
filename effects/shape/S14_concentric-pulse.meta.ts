import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'S14',
  slug: 'concentric-pulse',
  name: 'Concentric Pulse',
  category: 'shape',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['shape', 'circle', 'pulse', 'concentric'],
  params: {
    rings: { type: 'range', min: 3, max: 12, step: 1, default: 7, label: 'RINGS' },
    spread: { type: 'range', min: 0.35, max: 1.15, step: 0.01, default: 0.86, label: 'SPREAD' },
    thickness: { type: 'range', min: 1, max: 9, step: 0.5, default: 3, label: 'THICKNESS' },
    intensity: { type: 'range', min: 0.15, max: 1, step: 0.01, default: 0.78, label: 'INTENSITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
