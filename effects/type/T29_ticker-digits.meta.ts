import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T29',
  slug: 'ticker-digits',
  name: 'Ticker Digits',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 9,
  tags: ['type', 'digits', 'ticker', 'slots'],
  params: {
    value: { type: 'range', min: 0, max: 999999, step: 1, default: 260933, label: 'VALUE' },
    speed: { type: 'range', min: 0.5, max: 2.5, step: 0.1, default: 1.2, label: 'SPEED' },
    stagger: { type: 'range', min: 0.02, max: 0.18, step: 0.01, default: 0.08, label: 'STAGGER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
