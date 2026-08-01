import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'T18',
  slug: 'char-swarm-assemble',
  name: 'Char Swarm Assemble',
  category: 'type',
  kind: 'react',
  cost: 1,
  wave: 5,
  tags: ['type', 'swarm', 'assemble', 'curve', 'stagger'],
  params: {
    text: { type: 'enum', options: ['DEXA VFX', 'SWARM IN', 'FIND THE LINE'], default: 'DEXA VFX', label: 'TEXT' },
    spread: { type: 'range', min: 0.15, max: 0.8, step: 0.01, default: 0.42, label: 'SPREAD' },
    swirl: { type: 'range', min: 0, max: 1.2, step: 0.01, default: 0.55, label: 'SWIRL' },
    stagger: { type: 'range', min: 0.05, max: 0.5, step: 0.01, default: 0.34, label: 'STAGGER' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
