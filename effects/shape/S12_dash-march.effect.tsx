import type { FxKernel } from '../../src/fx/types';

const kernel = {
  kind: 'react',
  render: (ctx) => {
    const dashLength = Number(ctx.params.dashLength ?? 28);
    const gap = Number(ctx.params.gap ?? 16);
    const thickness = Number(ctx.params.thickness ?? 4);
    const laps = Math.max(1, Math.round(Number(ctx.params.laps ?? 2)));
    const signal = String(ctx.params.signal ?? '#5EE7F3');
    const phase = (ctx.frame % ctx.durationInFrames) / ctx.durationInFrames;
    const period = dashLength + gap;
    const offset = -phase * period * laps;

    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#0D0E10' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
          {ctx.subjectNode}
        </div>
        <svg
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          style={{ position: 'absolute', inset: '7%', width: '86%', height: '86%', overflow: 'visible' }}
        >
          <rect
            x="18"
            y="18"
            width="964"
            height="964"
            rx="24"
            fill="none"
            stroke={signal}
            strokeWidth={thickness}
            strokeDasharray={`${dashLength} ${gap}`}
            strokeDashoffset={offset}
            opacity="0.94"
            style={{ filter: `drop-shadow(0 0 ${thickness * 2.5}px ${signal})` }}
          />
          <rect
            x="43"
            y="43"
            width="914"
            height="914"
            rx="16"
            fill="none"
            stroke={signal}
            strokeWidth={Math.max(1, thickness * 0.42)}
            strokeDasharray={`${Math.max(3, dashLength * 0.45)} ${gap + dashLength * 0.7}`}
            strokeDashoffset={-offset * 0.5}
            opacity="0.34"
          />
        </svg>
      </div>
    );
  },
} satisfies FxKernel;

export default kernel;
