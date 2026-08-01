import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'K15',
  slug: 'tracker-bars',
  name: 'Tracker Bars',
  category: 'retro',
  kind: 'react',
  cost: 1,
  wave: 6,
  tags: ['retro', 'tracker', 'chiptune', 'sequencer', 'channel-bars'],
  params: {
    channels: { type: 'range', min: 3, max: 6, step: 1, default: 4, label: 'CHANNELS' },
    rows: { type: 'range', min: 5, max: 10, step: 1, default: 7, label: 'ROWS' },
    tempo: { type: 'range', min: 1, max: 4, step: 1, default: 2, label: 'TEMPO' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
