import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'U27',
  slug: 'command-palette',
  name: 'Command Palette',
  category: 'ui',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['ui', 'command', 'palette', 'filter'],
  params: {
    rows: { type: 'range', min: 3, max: 6, step: 1, default: 5, label: 'ROWS' },
    cycles: { type: 'range', min: 1, max: 2, step: 1, default: 1, label: 'CYCLES' },
    density: { type: 'range', min: 0.75, max: 1.2, step: 0.01, default: 1, label: 'DENSITY' },
    mode: { type: 'enum', options: ['render', 'inspect', 'export'], default: 'render', label: 'COMMAND' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
