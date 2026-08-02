import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F16',
  slug: 'end-card',
  name: 'End Card',
  category: 'cinema',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['cinema', 'end-card', 'screening', 'typography', 'layout'],
  params: {
    title: { type: 'enum', options: ['DEXA VFX', 'DEXA VFX LAB', 'DEXA VFX PREMIERE'], default: 'DEXA VFX', label: 'TITLE' },
    layout: { type: 'enum', options: ['screening', 'premiere', 'festival'], default: 'screening', label: 'LAYOUT' },
    reveal: { type: 'range', min: 0.4, max: 1.4, step: 0.1, default: 0.8, label: 'REVEAL' },
    accent: { type: 'range', min: 1, max: 8, step: 1, default: 3, label: 'ACCENT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
