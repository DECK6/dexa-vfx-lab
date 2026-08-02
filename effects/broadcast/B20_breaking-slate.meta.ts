import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B20',
  slug: 'breaking-slate',
  name: 'Breaking Slate',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'breaking', 'alert', 'slate'],
  params: {
    urgency: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.82, label: 'URGENCY' },
    strobes: { type: 'range', min: 2, max: 8, step: 1, default: 5, label: 'STROBES' },
    headline: { type: 'enum', options: ['DEXA VFX BREAKING', 'DEXA LIVE ALERT', 'DEXA SIGNAL NOW'], default: 'DEXA VFX BREAKING', label: 'HEADLINE' },
    bands: { type: 'range', min: 2, max: 6, step: 1, default: 4, label: 'BANDS' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
