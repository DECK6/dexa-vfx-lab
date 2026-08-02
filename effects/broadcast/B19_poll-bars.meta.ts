import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B19',
  slug: 'poll-bars',
  name: 'Poll Bars',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'poll', 'vote', 'percentage'],
  params: {
    choices: { type: 'range', min: 2, max: 4, step: 1, default: 3, label: 'CHOICES' },
    volatility: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.46, label: 'VOLATILITY' },
    poll: { type: 'enum', options: ['DEXA VFX', 'DEXA LIVE', 'DEXA LAB'], default: 'DEXA VFX', label: 'POLL' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
