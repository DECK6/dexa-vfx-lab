import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Z08',
  slug: 'ticker-marquee',
  name: 'Ticker Marquee',
  category: 'screen',
  kind: 'react',
  cost: 1,
  wave: 6,
  tags: ['screen', 'ticker', 'marquee', 'led', 'scroll'],
  params: {
    message: { type: 'enum', options: ['DEXA SIGNAL ONLINE', 'LIVE VISUAL SYSTEM', 'FRAME SYNC LOCKED'], default: 'DEXA SIGNAL ONLINE', label: 'MESSAGE' },
    speed: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'SPEED' },
    dotPitch: { type: 'range', min: 3, max: 8, step: 1, default: 5, label: 'DOT PITCH' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
