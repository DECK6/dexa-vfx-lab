import type { FxKernel } from '../../src/fx/types';

function colorToRgb(value: unknown): number[] {
  const hex = String(value ?? '#5EE7F3').replace('#', '');
  const valid = /^[0-9a-f]{6}$/i.test(hex) ? hex : '5EE7F3';
  return [0, 2, 4].map((offset) => Number.parseInt(valid.slice(offset, offset + 2), 16) / 255);
}

const kernel = {
  kind: 'webgl',
  shader: {
    frag: `
precision highp float;

varying vec2 v_uv;
uniform sampler2D u_subject;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_frame;
uniform float u_t;
uniform float u_levels;
uniform float u_contrast;
uniform float u_mix;
uniform vec3 u_signal;

void main() {
  const float TAU = 6.28318530718;
  vec4 subject = texture2D(u_subject, v_uv);
  vec3 background = vec3(0.051, 0.055, 0.063);
  vec3 source = mix(background, subject.rgb, subject.a);
  float luminance = dot(source, vec3(0.2126, 0.7152, 0.0722));
  float shaped = clamp((luminance - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  float steps = max(1.0, u_levels - 1.0);
  float loopBias = sin(u_t * TAU) * 0.04 / steps;
  float band = floor(clamp(shaped + loopBias, 0.0, 1.0) * steps + 0.5) / steps;
  vec3 posterized = mix(background, u_signal, band);
  float presence = max(subject.a, smoothstep(0.08, 0.22, luminance));
  posterized = mix(background, posterized, presence);
  vec3 color = mix(source, posterized, u_mix);
  gl_FragColor = vec4(color, 1.0);
}
`,
    uniforms: (ctx) => ({
      u_levels: Math.min(10, Math.max(2, Math.round(Number(ctx.params.levels ?? 4)))),
      u_contrast: Math.min(2, Math.max(0.5, Number(ctx.params.contrast ?? 1.2))),
      u_mix: Math.min(1, Math.max(0, Number(ctx.params.mix ?? 0.9))),
      u_signal: colorToRgb(ctx.params.signal),
    }),
  },
} satisfies FxKernel;

export default kernel;
