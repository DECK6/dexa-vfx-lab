import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U28',
  slug: 'biometric-scan',
  name: 'Biometric Scan',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'biometric', 'scan', 'authentication'],
  params: {
    mode: { type: 'enum', options: ['face', 'finger'], default: 'face', label: 'MODE' },
    cycles: { type: 'range', min: 1, max: 2, step: 1, default: 1, label: 'CYCLES' },
    detail: { type: 'range', min: 3, max: 8, step: 1, default: 6, label: 'DETAIL' },
    sweep: { type: 'range', min: 0.55, max: 1.35, step: 0.01, default: 1, label: 'SWEEP' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
