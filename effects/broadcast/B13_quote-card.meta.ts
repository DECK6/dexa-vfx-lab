import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'B13',
  slug: 'quote-card',
  name: 'Quote Card',
  category: 'broadcast',
  kind: 'react',
  cost: 1,
  wave: 7,
  tags: ['broadcast', 'quote', 'editorial', 'typography'],
  params: {
    quote: { type: 'enum', options: ['MOTION WITH INTENT', 'DESIGN THE SIGNAL', 'FRAME THE FUTURE'], default: 'MOTION WITH INTENT', label: 'QUOTE' },
    source: { type: 'enum', options: ['DEXA VFX', 'DEXA STUDIO', 'DEXA LAB'], default: 'DEXA VFX', label: 'SOURCE' },
    align: { type: 'enum', options: ['left', 'center'], default: 'left', label: 'ALIGN' },
    reveal: { type: 'range', min: 0.6, max: 1.8, step: 0.1, default: 1, label: 'REVEAL' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
