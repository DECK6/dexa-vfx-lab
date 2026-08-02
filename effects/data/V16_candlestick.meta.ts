import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'V16',
  slug: 'candlestick',
  name: 'Candlestick',
  category: 'data',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['data', 'candlestick', 'ohlc', 'finance', 'chart'],
  params: {
    candles: { type: 'range', min: 8, max: 18, step: 1, default: 12, label: 'CANDLES' },
    volatility: { type: 'range', min: 0.2, max: 1, step: 0.05, default: 0.62, label: 'VOLATILITY' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'CYCLES' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
