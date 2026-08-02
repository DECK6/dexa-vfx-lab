import sampleEnvelope from '../audio/sample.envelope.json';
import type { FxExportInput, FxExporter } from './types';

const WIDTH = 1280;
const HEIGHT = 720;
const FPS = 30;
const DURATION_SECONDS = 6;

function safeJson(value: unknown): string {
  return JSON.stringify(value)
    .replaceAll('<', '\\u003c')
    .replaceAll('\u2028', '\\u2028')
    .replaceAll('\u2029', '\\u2029');
}

function safeScript(source: string): string {
  return source.replace(/<\/script/gi, '<\\/script');
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function resolveKernelJs(input: FxExportInput): string {
  // Kernel JS is code-split per effect — callers load it via kernelJsLoaders
  // (src/export/kernel-js.gen.ts) and pass it in. No eager map in the entry chunk.
  if (input.kernelJs) return input.kernelJs;
  throw new Error(
    `No kernel JS provided for ${input.meta.id}. Load it via kernelJsLoaders[effectPath] and pass input.kernelJs.`,
  );
}

function documentShell(input: FxExportInput, body: string, runtime: string): string {
  const compositionId = `dexa-${input.meta.id.toLowerCase()}`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=${WIDTH}, height=${HEIGHT}" />
  <title>${escapeHtml(input.meta.id)} / ${escapeHtml(input.meta.name)}</title>
  <style>
    html, body { margin: 0; width: ${WIDTH}px; height: ${HEIGHT}px; overflow: hidden; }
    body { background: #000; font-family: 'JetBrains Mono', monospace; }
    #root { position: relative; width: ${WIDTH}px; height: ${HEIGHT}px; overflow: hidden; }
    .stage { position: absolute; inset: 0; width: ${WIDTH}px; height: ${HEIGHT}px; overflow: hidden; background: #0d0e10; }
    canvas { display: block; width: ${WIDTH}px; height: ${HEIGHT}px; }
  </style>
</head>
<body>
  <div id="root" data-composition-id="${compositionId}" data-start="0" data-width="${WIDTH}" data-height="${HEIGHT}" data-duration="${DURATION_SECONDS}" data-no-timeline>
    ${body}
  </div>
  <script>
${safeScript(runtime)}
  </script>
</body>
</html>
`;
}

function sharedRuntime(input: FxExportInput, kernelJs: string): string {
  return `    const WIDTH = ${WIDTH};
    const HEIGHT = ${HEIGHT};
    const FPS = ${FPS};
    const DURATION_IN_FRAMES = ${FPS * DURATION_SECONDS};
    const EFFECT_ID = ${safeJson(input.meta.id)};
    const PARAMS = ${safeJson(input.params)};
    ${input.meta.category === 'audio' ? `const AUDIO_FRAMES = ${safeJson((sampleEnvelope as { frames: unknown[] }).frames)};` : ''}

    function fxRandom(seed) {
      return function (key) {
        const s = seed + String.fromCharCode(0) + key;
        let hash = 2166136261 >>> 0;
        for (let i = 0; i < s.length; i++) {
          hash ^= s.charCodeAt(i);
          hash = Math.imul(hash, 16777619);
        }
        hash = Math.imul(hash ^ (hash >>> 15), hash | 1);
        hash ^= hash + Math.imul(hash ^ (hash >>> 7), hash | 61);
        return ((hash ^ (hash >>> 14)) >>> 0) / 4294967296;
      };
    }

    const random = fxRandom(EFFECT_ID);

    function loadKernel() {
      const module = { exports: {} };
      const exports = module.exports;
${safeScript(kernelJs)
  .split('\n')
  .map((line) => `      ${line}`)
  .join('\n')}
      void exports;
      return module.exports.default;
    }
`;
}

function canvasSubjectRuntime(): string {
  return `    function makeSubjectBitmap() {
      const subjectCanvas = document.createElement('canvas');
      subjectCanvas.width = 480;
      subjectCanvas.height = 240;
      const subjectG = subjectCanvas.getContext('2d');
      subjectG.clearRect(0, 0, 480, 240);
      // Canonical DEXA triad (SPEC §7): nested outline triangles + cyan point. No label (see makeSubjectNode).
      function tri(r, mode) {
        subjectG.beginPath();
        for (let v = 0; v < 3; v++) {
          const a = -Math.PI / 2 + (v * 2 * Math.PI) / 3;
          const x = 240 + r * Math.cos(a);
          const y = 128 + r * Math.sin(a);
          v === 0 ? subjectG.moveTo(x, y) : subjectG.lineTo(x, y);
        }
        subjectG.closePath();
        if (mode === 'fill') { subjectG.fillStyle = '#5ee7f3'; subjectG.fill(); }
        else { subjectG.strokeStyle = '#f7fafc'; subjectG.lineWidth = 6; subjectG.stroke(); }
      }
      tri(84, 'stroke'); tri(58, 'stroke'); tri(32, 'fill');
      return subjectCanvas;
    }

    const subject = { kind: 'triad', label: 'DEXA', bitmap: makeSubjectBitmap() };

    function makeContext(frame) {
      const clamped = Math.max(0, Math.min(frame, DURATION_IN_FRAMES - 1));
      return {
        frame: frame,
        fps: FPS,
        durationInFrames: DURATION_IN_FRAMES,
        width: WIDTH,
        height: HEIGHT,
        t: frame / DURATION_IN_FRAMES,
        random: random,
        params: PARAMS,
        subject: subject,
        audio: typeof AUDIO_FRAMES !== 'undefined' ? AUDIO_FRAMES[clamped] : undefined
      };
    }
`;
}

function canvasRuntime(input: FxExportInput, kernelJs: string): string {
  return `${sharedRuntime(input, kernelJs)}
${canvasSubjectRuntime()}
    const kernel = loadKernel();
    const canvas = document.getElementById('fx-canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const g = canvas.getContext('2d');

    function render(time) {
      const frame = Math.round(time * 30);
      const ctx = makeContext(frame);
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, WIDTH, HEIGHT);
      if (kernel.kind === 'canvas' && typeof kernel.draw === 'function') {
        return kernel.draw(g, ctx);
      }
      if (kernel.kind === 'canvas' && kernel.stateful) {
        let state = kernel.stateful.init(makeContext(0));
        for (let replayFrame = 0; replayFrame <= frame; replayFrame++) {
          state = kernel.stateful.step(state, makeContext(replayFrame));
        }
        return kernel.stateful.render(g, state, ctx);
      }
      throw new Error('Expected a canvas kernel for ' + EFFECT_ID);
    }

    window.addEventListener('hf-seek', function (event) {
      const drawing = render(event.detail.time);
      event.detail.waitUntil(Promise.resolve(drawing));
    });
    render(0);
`;
}

function reactRuntime(input: FxExportInput, kernelJs: string): string {
  return `    const Frag = Symbol('Frag');

    function flatten(children, out) {
      for (const child of children) {
        if (Array.isArray(child)) flatten(child, out);
        else if (child !== null && child !== undefined && child !== false && child !== true) out.push(child);
      }
      return out;
    }

    function h(type, props) {
      const children = flatten(Array.prototype.slice.call(arguments, 2), []);
      if (type === Frag) return children;
      const nextProps = Object.assign({}, props || {}, { children: children.length === 1 ? children[0] : children });
      if (typeof type === 'function') return type(nextProps);
      return { type: type, props: nextProps, children: children };
    }

    const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'order']);
    function styleText(style) {
      if (typeof style === 'string') return style;
      return Object.entries(style || {}).map(function (entry) {
        const key = entry[0].replace(/[A-Z]/g, function (letter) { return '-' + letter.toLowerCase(); });
        const value = typeof entry[1] === 'number' && !unitless.has(entry[0]) ? entry[1] + 'px' : entry[1];
        return key + ':' + value;
      }).join(';');
    }

    function materialize(node, svgParent) {
      if (Array.isArray(node)) {
        const fragment = document.createDocumentFragment();
        for (const child of node) fragment.appendChild(materialize(child, svgParent));
        return fragment;
      }
      if (typeof node === 'string' || typeof node === 'number') return document.createTextNode(String(node));
      if (!node || typeof node !== 'object') return document.createTextNode('');
      const isSvg = svgParent || node.type === 'svg';
      const element = isSvg
        ? document.createElementNS('http://www.w3.org/2000/svg', node.type)
        : document.createElement(node.type);
      for (const entry of Object.entries(node.props || {})) {
        const key = entry[0];
        const value = entry[1];
        if (key === 'children' || key === 'key' || key === 'ref' || value === null || value === undefined || value === false) continue;
        if (key === 'style') element.style.cssText = styleText(value);
        else if (key === 'className') element.setAttribute('class', String(value));
        else if (key === 'htmlFor') element.setAttribute('for', String(value));
        else if (key.startsWith('on') && typeof value === 'function') element.addEventListener(key.slice(2).toLowerCase(), value);
        else element.setAttribute(key, value === true ? '' : String(value));
      }
      for (const child of node.children || []) element.appendChild(materialize(child, isSvg && node.type !== 'foreignObject'));
      return element;
    }

    function makeSubjectNode() {
      // Canonical DEXA triad: nested outline triangles, innermost filled cyan (dark-canvas palette).
      // Subject is a decorative prop — effects may legitimately cover it, so opt out of
      // occlusion/overlap layout findings (data-layout-allow-*), keeping checks for effect text.
      function tri(r, attrs) {
        const pts = [0, 1, 2].map(function (v) {
          const a = -Math.PI / 2 + (v * 2 * Math.PI) / 3;
          return (240 + r * Math.cos(a)).toFixed(1) + ',' + (118 + r * Math.sin(a)).toFixed(1);
        }).join(' ');
        return h('polygon', Object.assign({ points: pts }, attrs));
      }
      return h('svg', {
        viewBox: '0 0 480 240', width: 480, height: 240, 'aria-label': 'DEXA triad',
        'data-layout-allow-occlusion': '', 'data-layout-allow-overlap': '',
      },
        tri(78, { fill: 'none', stroke: '#f7fafc', 'stroke-width': 5 }),
        tri(54, { fill: 'none', stroke: '#f7fafc', 'stroke-width': 5 }),
        tri(30, { fill: '#5ee7f3' })
        // No label text in snippets: transition effects sweep bright content under it,
        // which can never satisfy the WCAG contrast gate for every frame. The label is a
        // gallery affordance only — snippet users swap in their own subject anyway.
      );
    }

${sharedRuntime(input, kernelJs)}
    const subject = { kind: 'triad', label: 'DEXA' };
    const kernel = loadKernel();
    const container = document.getElementById('react-root');

    function makeContext(frame) {
      return {
        frame: frame,
        fps: FPS,
        durationInFrames: DURATION_IN_FRAMES,
        width: WIDTH,
        height: HEIGHT,
        t: frame / DURATION_IN_FRAMES,
        random: random,
        params: PARAMS,
        subject: subject,
        subjectNode: makeSubjectNode()
      };
    }

    function render(time) {
      const frame = Math.round(time * 30);
      if (kernel.kind !== 'react' || typeof kernel.render !== 'function') throw new Error('Expected a react kernel for ' + EFFECT_ID);
      container.replaceChildren(materialize(kernel.render(makeContext(frame)), false));
    }

    window.addEventListener('hf-seek', function (event) {
      const drawing = render(event.detail.time);
      event.detail.waitUntil(Promise.resolve(drawing));
    });
    render(0);
`;
}

function webglRuntime(input: FxExportInput, kernelJs: string): string {
  return `${sharedRuntime(input, kernelJs)}
${canvasSubjectRuntime()}
    const kernel = loadKernel();
    const canvas = document.getElementById('fx-canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const fragmentSource = kernel.shader.frag;
    const gl2 = /^\\s*#version 300 es/.test(fragmentSource);
    // preserveDrawingBuffer: checker readback samples the buffer after composite — without it every sample reads black (=> sweep_static)
    const glOptions = { preserveDrawingBuffer: true };
    const gl = canvas.getContext(gl2 ? 'webgl2' : 'webgl', glOptions);
    if (!gl) throw new Error('WebGL is unavailable');
    const vertexSource = gl2
      ? '#version 300 es\\nin vec2 a_position; out vec2 v_uv; void main(){v_uv=a_position*.5+.5;gl_Position=vec4(a_position,0.,1.);}'
      : 'attribute vec2 a_position; varying vec2 v_uv; void main(){v_uv=a_position*.5+.5;gl_Position=vec4(a_position,0.,1.);}';

    function compile(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source); gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader) || 'Shader compile failed');
      return shader;
    }
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) || 'Program link failed');
    const position = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, position);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
    gl.useProgram(program);
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    function setUniform(name, value) {
      const location = gl.getUniformLocation(program, name);
      if (location === null) return;
      if (typeof value === 'number') gl.uniform1f(location, value);
      else if (value.length === 2) gl.uniform2fv(location, value);
      else if (value.length === 3) gl.uniform3fv(location, value);
      else if (value.length === 4) gl.uniform4fv(location, value);
      else gl.uniform1fv(location, value);
    }

    // subject bitmap -> texture unit 0 (unbound samplers read black, which froze earlier snippets)
    const subjectTexture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, subjectTexture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, subject.bitmap);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    const subjectLocation = gl.getUniformLocation(program, 'u_subject');
    if (subjectLocation !== null) gl.uniform1i(subjectLocation, 0);

    function render(time) {
      const frame = Math.round(time * 30);
      const context = makeContext(frame);
      gl.viewport(0, 0, WIDTH, HEIGHT);
      gl.useProgram(program);
      setUniform('u_resolution', [WIDTH, HEIGHT]);
      setUniform('u_time', frame / FPS);
      setUniform('u_frame', frame);
      setUniform('u_t', context.t);
      const values = kernel.shader.uniforms(context);
      for (const entry of Object.entries(values)) setUniform(entry[0], entry[1]);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    window.addEventListener('hf-seek', function (event) {
      const drawing = render(event.detail.time);
      event.detail.waitUntil(Promise.resolve(drawing));
    });
    render(0);
`;
}

export function generateHyperframes(input: FxExportInput): string {
  const kernelJs = resolveKernelJs(input);
  if (input.meta.kind === 'react') {
    return documentShell(
      input,
      `<div id="react-root" class="clip stage" data-start="0" data-duration="${DURATION_SECONDS}" data-track-index="0"></div>`,
      reactRuntime(input, kernelJs),
    );
  }
  const body = `<canvas id="fx-canvas" class="clip stage" width="${WIDTH}" height="${HEIGHT}" data-start="0" data-duration="${DURATION_SECONDS}" data-track-index="0"></canvas>`;
  return documentShell(
    input,
    body,
    input.meta.kind === 'webgl'
      ? webglRuntime(input, kernelJs)
      : canvasRuntime(input, kernelJs),
  );
}

export const hyperframesExporter: FxExporter = {
  id: 'hyperframes',
  label: 'HYPERFRAMES',
  language: 'html',
  applies: () => true,
  generate: generateHyperframes,
};
