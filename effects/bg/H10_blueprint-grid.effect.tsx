import type { FxKernel } from '../../src/fx/types';

const kernel = {
  kind: 'react',
  render: (ctx) => {
    const spacing = Math.min(72, Math.max(24, Number(ctx.params.spacing ?? 42)));
    const pan = Math.min(3, Math.max(0, Math.round(Number(ctx.params.pan ?? 1))));
    const detail = Math.min(1, Math.max(0.2, Number(ctx.params.detail ?? 0.65)));
    const signal = String(ctx.params.signal ?? '#5EE7F3');
    const offset = ctx.t * spacing * pan;
    const phase = ctx.t * Math.PI * 2;
    const markers = Array.from({ length: 12 }, (_, index) => ({
      left: 8 + ctx.random(`marker:${index}:x`) * 84,
      top: 7 + ctx.random(`marker:${index}:y`) * 86,
      length: 34 + ctx.random(`marker:${index}:length`) * 70,
      vertical: index % 3 === 0,
    }));

    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#07141B' }}>
        <div
          style={{
            position: 'absolute',
            inset: -spacing,
            backgroundImage: `linear-gradient(${signal}14 1px, transparent 1px), linear-gradient(90deg, ${signal}14 1px, transparent 1px), linear-gradient(${signal}28 1px, transparent 1px), linear-gradient(90deg, ${signal}28 1px, transparent 1px)`,
            backgroundSize: `${spacing / 5}px ${spacing / 5}px, ${spacing / 5}px ${spacing / 5}px, ${spacing}px ${spacing}px, ${spacing}px ${spacing}px`,
            backgroundPosition: `${offset}px ${-offset * 0.55}px`,
          }}
        />
        {markers.map((marker, index) => (
          <div key={index} style={{ position: 'absolute', left: `${marker.left}%`, top: `${marker.top}%`, opacity: detail * (0.34 + 0.2 * Math.sin(phase + index)) }}>
            <div style={{ width: marker.vertical ? 1 : marker.length, height: marker.vertical ? marker.length : 1, background: signal }} />
            <div style={{ position: 'absolute', left: -3, top: -3, width: 7, height: 7, border: `1px solid ${signal}` }} />
            <div style={{ position: 'absolute', left: marker.vertical ? 7 : marker.length + 7, top: marker.vertical ? marker.length - 8 : -8, color: signal, fontFamily: 'monospace', fontSize: 7, letterSpacing: 1 }}>{`${index + 1}.${Math.round(marker.length)}`}</div>
          </div>
        ))}
        <div style={{ position: 'absolute', left: 20, top: 18, color: signal, opacity: 0.38, fontFamily: 'monospace', fontSize: 9, letterSpacing: 2 }}>DEXA / FIELD PLAN · 09</div>
        <div style={{ position: 'absolute', inset: '16%', opacity: 0.25, filter: `drop-shadow(0 0 8px ${signal}44)` }}>{ctx.subjectNode}</div>
        <div style={{ position: 'absolute', inset: 10, border: `1px solid ${signal}24`, pointerEvents: 'none' }} />
      </div>
    );
  },
} satisfies FxKernel;

export default kernel;
