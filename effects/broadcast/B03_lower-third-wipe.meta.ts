import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B03',
  slug: 'lower-third-wipe',
  name: 'Lower Third Wipe',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'lower-third', 'wipe', 'color-bar'],
  params: {
    title: { type: 'enum', options: ['DEXA VFX', 'DEXA LIVE', 'DEXA FRAME'], default: 'DEXA VFX', label: 'TITLE' },
    direction: { type: 'enum', options: ['left-to-right', 'right-to-left'], default: 'left-to-right', label: 'DIRECTION' },
    barGap: { type: 'range', min: 0, max: 24, step: 1, default: 8, label: 'BAR GAP' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
