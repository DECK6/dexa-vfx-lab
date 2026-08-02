import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'F14',
  slug: 'silent-era',
  name: 'Silent Era',
  category: 'cinema',
  kind: 'canvas',
  cost: 2,
  wave: 7,
  stateful: true,
  tags: ['cinema', 'silent-film', 'sepia', 'intertitle', 'stateful'],
  params: {
    grain: { type: 'range', min: 0.1, max: 1, step: 0.05, default: 0.62, label: 'GRAIN' },
    flicker: { type: 'range', min: 0, max: 1, step: 0.05, default: 0.48, label: 'FLICKER' },
    intertitle: { type: 'toggle', default: true, label: 'INTERTITLE' },
    title: { type: 'enum', options: ['DEXA VFX PRESENTS', 'A DEXA VFX PICTURE', 'DEXA VFX / ACT I'], default: 'DEXA VFX PRESENTS', label: 'TITLE' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
