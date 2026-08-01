import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'Q10',
  slug: 'liquid-fill',
  name: 'Liquid Fill',
  category: 'liquid',
  kind: 'react',
  cost: 1,
  wave: 2,
  tags: ['liquid', 'fill', 'wave'],
  params: {
    amount: { type: 'range', min: 0.55, max: 1, step: 0.01, default: 0.92, label: 'AMOUNT' },
    waveHeight: { type: 'range', min: 1, max: 12, step: 0.5, default: 4.5, label: 'WAVE HEIGHT' },
    waves: { type: 'enum', options: ['1', '2', '3'], default: '2', label: 'WAVES' },
    viscosity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.64, label: 'VISCOSITY' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
