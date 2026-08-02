import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U23',
  slug: 'otp-input',
  name: 'OTP Input',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'otp', 'authentication', 'validation'],
  params: {
    digits: { type: 'range', min: 4, max: 8, step: 1, default: 6, label: 'DIGITS' },
    cycles: { type: 'range', min: 1, max: 2, step: 1, default: 1, label: 'CYCLES' },
    pace: { type: 'range', min: 0.55, max: 1.4, step: 0.01, default: 1, label: 'PACE' },
    masked: { type: 'toggle', default: false, label: 'MASKED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
