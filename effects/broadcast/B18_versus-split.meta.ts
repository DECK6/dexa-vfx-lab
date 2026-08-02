import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B18',
  slug: 'versus-split',
  name: 'Versus Split',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'versus', 'matchup', 'diagonal'],
  params: {
    angle: { type: 'range', min: 8, max: 28, step: 1, default: 18, label: 'SPLIT ANGLE' },
    impact: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.82, label: 'IMPACT' },
    matchup: { type: 'enum', options: ['DEXA / VFX', 'DEXA / LAB', 'VFX / LIVE'], default: 'DEXA / VFX', label: 'MATCHUP' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
