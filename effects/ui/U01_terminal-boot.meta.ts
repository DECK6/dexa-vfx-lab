import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U01',
  slug: 'terminal-boot',
  name: 'Terminal Boot',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 1,
  tags: ['ui', 'terminal', 'boot', 'cursor'],
  params: {
    speed: { type: 'range', min: 0.5, max: 2, step: 0.1, default: 1, label: 'SPEED' },
    lines: { type: 'range', min: 3, max: 7, step: 1, default: 6, label: 'LINES' },
    cursor: { type: 'toggle', default: true, label: 'CURSOR' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
