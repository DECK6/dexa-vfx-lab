import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B09',
  slug: 'news-ticker',
  name: 'News Ticker',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'ticker', 'breaking', 'headline'],
  params: {
    speed: { type: 'range', min: 0.5, max: 2, step: 0.1, default: 1, label: 'SPEED' },
    density: { type: 'range', min: 2, max: 5, step: 1, default: 4, label: 'STORIES' },
    edition: { type: 'enum', options: ['NEWS', 'MARKET', 'SPORT'], default: 'NEWS', label: 'EDITION' },
    breaking: { type: 'toggle', default: true, label: 'BREAKING' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
