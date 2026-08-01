import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z10',
  slug: 'crt-terminal',
  name: 'CRT Terminal',
  category: 'screen',
  kind: 'canvas',
  cost: 2,
  wave: 6,
  tags: ['screen', 'crt', 'terminal', 'phosphor', 'burn-in'],
  params: {
    curvature: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.68, label: 'CURVATURE' },
    persistence: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.72, label: 'PERSISTENCE' },
    scanRate: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'SCAN RATE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
