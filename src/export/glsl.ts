import type { FxExporter } from './types';

function quotedValue(source: string, start: number, quote: string): string | null {
  let value = '';
  for (let i = start + 1; i < source.length; i++) {
    const char = source[i];
    if (char === '\\') {
      if (i + 1 >= source.length) return null;
      const next = source[++i];
      value += quote === '`' ? `\\${next}` : next === 'n' ? '\n' : next === 't' ? '\t' : next;
      continue;
    }
    if (char === quote) return value.trim();
    value += char;
  }
  return null;
}

export function extractFragmentShader(kernelSource: string): string {
  const patterns = [
    /\bfrag\s*:\s*(?:String\.raw\s*)?([`'"])/g,
    /\b(?:const|let|var)\s+frag\s*=\s*(?:String\.raw\s*)?([`'"])/g,
  ];
  for (const pattern of patterns) {
    const match = pattern.exec(kernelSource);
    if (!match || match.index === undefined) continue;
    const quoteAt = match.index + match[0].lastIndexOf(match[1]);
    const shader = quotedValue(kernelSource, quoteAt, match[1]);
    if (shader !== null) return shader;
  }
  throw new Error('Unable to extract a frag shader string from the kernel source.');
}

export const glslExporter: FxExporter = {
  id: 'glsl',
  label: 'GLSL',
  language: 'glsl',
  applies: (meta) => meta.kind === 'webgl',
  generate: ({ kernelSource }) => extractFragmentShader(kernelSource),
};
