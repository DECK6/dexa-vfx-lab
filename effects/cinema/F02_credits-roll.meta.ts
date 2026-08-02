import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F02',
  slug: 'credits-roll',
  name: 'Credits Roll',
  category: 'cinema',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['cinema', 'credits', 'scroll', 'typography'],
  params: {
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'ROLLS' },
    density: { type: 'range', min: 3, max: 6, step: 1, default: 5, label: 'SECTIONS' },
    layout: { type: 'enum', options: ['center', 'split'], default: 'split', label: 'LAYOUT' },
    title: { type: 'enum', options: ['DEXA VFX', 'DEXA CINEMA', 'DEXA PICTURES'], default: 'DEXA VFX', label: 'TITLE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
