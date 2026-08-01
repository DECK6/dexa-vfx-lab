import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'A02',
  slug: 'spectrum-analyzer',
  name: 'Spectrum Analyzer',
  category: 'audio',
  kind: 'canvas',
  cost: 2,
  wave: 2,
  tags: ['audio', 'spectrum', 'analyzer', 'frequency'],
  params: {
    bins: { type: 'range', min: 16, max: 96, step: 4, default: 48, label: 'BINS' },
    gain: { type: 'range', min: 0.25, max: 3, step: 0.05, default: 1.4, label: 'GAIN' },
    response: { type: 'range', min: 0.5, max: 2, step: 0.05, default: 0.85, label: 'RESPONSE' },
    layout: { type: 'enum', options: ['radial', 'columns'], default: 'radial', label: 'LAYOUT' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
