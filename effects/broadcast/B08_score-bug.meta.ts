import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B08',
  slug: 'score-bug',
  name: 'Score Bug',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'score', 'sports', 'flip'],
  params: {
    matchup: { type: 'enum', options: ['DEXA / VFX', 'DXA / LAB', 'CYAN / NOIR'], default: 'DEXA / VFX', label: 'MATCHUP' },
    score: { type: 'range', min: 0, max: 9, step: 1, default: 3, label: 'HOME SCORE' },
    period: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'PERIOD' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
