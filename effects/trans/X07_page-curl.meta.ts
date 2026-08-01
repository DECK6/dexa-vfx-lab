import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'X07',
  slug: 'page-curl',
  name: 'Page Curl',
  category: 'trans',
  kind: 'webgl',
  cost: 2,
  wave: 4,
  tags: ['transition', 'page', 'curl', 'paper', 'webgl'],
  params: {
    curl: { type: 'range', min: 0.08, max: 0.32, step: 0.01, default: 0.2, label: 'CURL' },
    shadow: { type: 'range', min: 0.2, max: 1, step: 0.05, default: 0.72, label: 'SHADOW' },
    paper: { type: 'range', min: 0.65, max: 1, step: 0.01, default: 0.92, label: 'PAPER' },
    speed: { type: 'range', min: 1, max: 3, step: 1, default: 1, label: 'SPEED' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
