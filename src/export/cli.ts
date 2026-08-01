import type { FxExporter } from './types';

function shellSingleQuote(value: string): string {
  return `'${value.replaceAll("'", `'\\''`)}'`;
}

export const cliExporter: FxExporter = {
  id: 'cli',
  label: 'CLI',
  language: 'sh',
  applies: () => true,
  generate: ({ meta, params }) =>
    `npx remotion render src/remotion/index.ts ${meta.id} out/${meta.id.toLowerCase()}.mp4 --props=${shellSingleQuote(JSON.stringify(params))}`,
};
