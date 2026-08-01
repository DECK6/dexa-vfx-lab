import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'L08',
  slug: 'lightning-arc',
  name: 'Lightning Arc',
  category: 'light',
  kind: 'canvas',
  cost: 2,
  wave: 3,
  tags: ['light', 'lightning', 'arc', 'branch'],
  params: {
    branches: { type: 'range', min: 1, max: 8, step: 1, default: 5, label: 'BRANCHES' },
    jaggedness: { type: 'range', min: 0.1, max: 1, step: 0.01, default: 0.68, label: 'JAGGEDNESS' },
    thickness: { type: 'range', min: 0.5, max: 4, step: 0.1, default: 1.7, label: 'THICKNESS' },
    glow: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.78, label: 'GLOW' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
