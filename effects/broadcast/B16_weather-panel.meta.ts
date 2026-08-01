import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B16',
  slug: 'weather-panel',
  name: 'Weather Panel',
  category: 'broadcast',
  kind: 'react',
  cost: 2,
  wave: 7,
  tags: ['broadcast', 'weather', 'forecast', 'panel'],
  params: {
    temperature: { type: 'range', min: -20, max: 45, step: 1, default: 24, label: 'TEMPERATURE' },
    condition: { type: 'enum', options: ['CLEAR', 'CLOUD', 'RAIN'], default: 'CLOUD', label: 'CONDITION' },
    units: { type: 'enum', options: ['C', 'F'], default: 'C', label: 'UNITS' },
    wind: { type: 'range', min: 0, max: 50, step: 1, default: 12, label: 'WIND' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
