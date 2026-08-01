import type { FxKernel } from '../../src/fx/types';

const kernel = {
  kind: 'react',
  render: (ctx) => {
    const inset = Number(ctx.params.inset ?? 8) * 10;
    const arm = Number(ctx.params.armLength ?? 24) * 10;
    const traceLength = Number(ctx.params.traceLength ?? 0.34);
    const thickness = Number(ctx.params.thickness ?? 5);
    const signal = String(ctx.params.signal ?? '#5EE7F3');
    const phase = (ctx.frame % ctx.durationInFrames) / ctx.durationInFrames;
    const far = 1000 - inset;
    const paths = [
      `M ${inset + arm} ${inset} H ${inset} V ${inset + arm}`,
      `M ${far - arm} ${inset} H ${far} V ${inset + arm}`,
      `M ${far - arm} ${far} H ${far} V ${far - arm}`,
      `M ${inset + arm} ${far} H ${inset} V ${far - arm}`,
    ];

    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#0D0E10' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
          {ctx.subjectNode}
        </div>
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {paths.map((path, index) => {
            const localPhase = (phase + index * 0.25) % 1;
            return (
              <g key={path}>
                <path d={path} pathLength={1} fill="none" stroke={signal} strokeWidth={Math.max(1, thickness * 0.32)} opacity="0.2" />
                <path
                  d={path}
                  pathLength={1}
                  fill="none"
                  stroke={signal}
                  strokeWidth={thickness}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={`${traceLength} ${1 - traceLength}`}
                  strokeDashoffset={-localPhase}
                  style={{ filter: `drop-shadow(0 0 ${thickness * 2.2}px ${signal})` }}
                />
              </g>
            );
          })}
        </svg>
      </div>
    );
  },
} satisfies FxKernel;

export default kernel;
