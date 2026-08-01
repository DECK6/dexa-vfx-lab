import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B04',
  slug: 'lower-third-stack',
  name: 'Lower Third Stack',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'lower-third', 'stack', 'information'],
  params: {
    title: { type: 'enum', options: ['DEXA VFX', 'DEXA NETWORK', 'DEXA SYSTEMS'], default: 'DEXA VFX', label: 'TITLE' },
    tierGap: { type: 'range', min: 2, max: 18, step: 1, default: 6, label: 'TIER GAP' },
    density: { type: 'enum', options: ['compact', 'standard', 'wide'], default: 'standard', label: 'DENSITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
