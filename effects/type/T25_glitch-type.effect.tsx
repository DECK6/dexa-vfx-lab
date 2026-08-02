import type { FxKernel } from '../../src/fx/types';

const kernel = {
  kind: 'react',
  render: (ctx) => {
    const text = String(ctx.params.text ?? 'DEXA VFX');
    const slices = Math.max(5, Math.round(Number(ctx.params.slices ?? 9)));
    const intensity = Number(ctx.params.intensity ?? 0.72);
    const signal = String(ctx.params.signal ?? '#5EE7F3');
    const duration = Math.max(1, ctx.durationInFrames);
    const localFrame = ctx.frame % duration;
    const tick = Math.floor(localFrame / 4);
    const burst = ctx.random(`burst:${tick}`) > 0.62;
    const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%';
    const fontSize = Math.max(30, Math.min((ctx.width * 0.82) / Math.max(5, text.length * 0.62), ctx.height * 0.36));
    const textStyle = { position: 'absolute' as const, inset: 0, display: 'grid', placeItems: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize, fontWeight: 800, letterSpacing: '0.02em', whiteSpace: 'pre' as const };

    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#0D0E10' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08 }}>{ctx.subjectNode}</div>
        <div data-layout-allow-overlap style={{ ...textStyle, color: '#F7FAFC', opacity: burst ? 0.34 : 0.92, textShadow: `0 0 12px ${signal}52` }}>{text}</div>
        {Array.from({ length: slices }, (_, index) => {
          const top = index / slices * 100;
          const bottom = 100 - (index + 1) / slices * 100;
          const active = burst && ctx.random(`slice:${tick}:${index}:on`) > 0.34;
          const direction = ctx.random(`slice:${tick}:${index}:dir`) > 0.5 ? 1 : -1;
          const shift = active ? direction * (5 + ctx.random(`slice:${tick}:${index}:shift`) * 26) * intensity : 0;
          const substitute = active && ctx.random(`slice:${tick}:${index}:glyph`) > 0.72;
          const replacement = substitute
            ? text.split('').map((character, charIndex) => character === ' ' || ctx.random(`replace:${tick}:${index}:${charIndex}`) < 0.74 ? character : glyphs[Math.floor(ctx.random(`glyph:${tick}:${index}:${charIndex}`) * glyphs.length)]).join('')
            : text;
          return (
            <div key={index} data-layout-allow-overflow data-layout-allow-overlap style={{ ...textStyle, color: index % 3 === 0 ? signal : '#F7FAFC', clipPath: `inset(${top}% 0 ${bottom}% 0)`, transform: `translate3d(${shift}px, 0, 0)`, opacity: active ? 1 : 0, textShadow: direction > 0 ? `-5px 0 #FF5A1F` : `5px 0 ${signal}` }}>{replacement}</div>
          );
        })}
        <div style={{ position: 'absolute', left: 0, right: 0, top: `${(tick * 17) % 100}%`, height: 2, background: signal, opacity: burst ? 0.62 : 0.08, boxShadow: `0 0 10px ${signal}` }} />
      </div>
    );
  },
} satisfies FxKernel;

export default kernel;
