import type { FxMeta } from '../../src/fx/types';

const meta = {
  id: 'I15',
  slug: 'book-flip',
  name: 'Book Flip',
  category: 'three',
  kind: 'react',
  cost: 2,
  wave: 8,
  tags: ['three', 'book', 'pages', 'flip'],
  params: {
    pages: { type: 'range', min: 3, max: 7, step: 1, default: 5, label: 'PAGES' },
    spread: { type: 'range', min: 0.5, max: 1, step: 0.01, default: 0.82, label: 'SPREAD' },
    curl: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.58, label: 'CURL' },
    signal: { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  },
} satisfies FxMeta;

export default meta;
