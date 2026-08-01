import type { FxContext, WebglKernel } from '../../fx/types';

const VERTEX_SOURCE = `
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const QUAD = new Float32Array([
  -1, -1,
  1, -1,
  -1, 1,
  -1, 1,
  1, -1,
  1, 1,
]);

interface ProgramRecord {
  program: WebGLProgram;
  position: number;
  uniforms: Map<string, WebGLUniformLocation | null>;
}

export interface GlRenderResult {
  ok: boolean;
  error?: string;
}

/**
 * Small deterministic WebGL renderer shared by LivePreview and Remotion.
 * LivePreview creates exactly one instance (`sharedGlRunner`) for the page;
 * Remotion creates one instance per isolated composition canvas.
 */
export class WebglRenderer {
  readonly canvas: HTMLCanvasElement;

  private readonly gl: WebGLRenderingContext;
  private readonly quad: WebGLBuffer;
  private readonly programs = new Map<WebglKernel, ProgramRecord | Error>();
  private readonly textures = new WeakMap<ImageBitmap, WebGLTexture>();

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      preserveDrawingBuffer: true,
      premultipliedAlpha: true,
    });
    if (!gl) throw new Error('WebGL is unavailable');
    this.gl = gl;

    const quad = gl.createBuffer();
    if (!quad) throw new Error('Unable to create WebGL fullscreen quad');
    this.quad = quad;
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(gl.ARRAY_BUFFER, QUAD, gl.STATIC_DRAW);
  }

  render(kernel: WebglKernel, ctx: FxContext): GlRenderResult {
    try {
      const record = this.getProgram(kernel);
      if (record instanceof Error) return { ok: false, error: record.message };

      const { gl } = this;
      gl.viewport(0, 0, this.canvas.width, this.canvas.height);
      gl.disable(gl.BLEND);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(record.program);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.quad);
      gl.enableVertexAttribArray(record.position);
      gl.vertexAttribPointer(record.position, 2, gl.FLOAT, false, 0, 0);

      if (ctx.subject.bitmap) {
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.getSubjectTexture(ctx.subject.bitmap));
        const subjectLocation = this.uniformLocation(record, 'u_subject');
        if (subjectLocation !== null) gl.uniform1i(subjectLocation, 0);
      }

      const values: Record<string, number | number[]> = {
        ...kernel.uniforms(ctx),
        u_resolution: [ctx.width, ctx.height],
        u_time: ctx.frame / ctx.fps,
        u_frame: ctx.frame,
        u_t: Math.min(1, Math.max(0, ctx.t)),
      };
      for (const [name, value] of Object.entries(values)) this.setUniform(record, name, value);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      return { ok: true };
    } catch (cause) {
      const error = cause instanceof Error ? cause : new Error(String(cause));
      console.error(`[glRunner] ${error.message}`);
      return { ok: false, error: error.message };
    }
  }

  finish() {
    this.gl.finish();
  }

  private getProgram(kernel: WebglKernel): ProgramRecord | Error {
    const cached = this.programs.get(kernel);
    if (cached) return cached;

    try {
      const gl = this.gl;
      const vertex = this.compile(gl.VERTEX_SHADER, VERTEX_SOURCE);
      const fragment = this.compile(gl.FRAGMENT_SHADER, kernel.frag);
      const program = gl.createProgram();
      if (!program) throw new Error('Unable to create WebGL program');
      gl.attachShader(program, vertex);
      gl.attachShader(program, fragment);
      gl.linkProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const message = gl.getProgramInfoLog(program) || 'WebGL program link failed';
        gl.deleteProgram(program);
        throw new Error(message);
      }
      const position = gl.getAttribLocation(program, 'a_position');
      if (position < 0) throw new Error('Shader is missing a_position attribute');
      const record: ProgramRecord = { program, position, uniforms: new Map() };
      this.programs.set(kernel, record);
      return record;
    } catch (cause) {
      const error = cause instanceof Error ? cause : new Error(String(cause));
      this.programs.set(kernel, error);
      console.error(`[glRunner] shader compile error: ${error.message}`);
      return error;
    }
  }

  private compile(type: number, source: string): WebGLShader {
    const shader = this.gl.createShader(type);
    if (!shader) throw new Error('Unable to create WebGL shader');
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      const message = this.gl.getShaderInfoLog(shader) || 'WebGL shader compile failed';
      this.gl.deleteShader(shader);
      throw new Error(message);
    }
    return shader;
  }

  private uniformLocation(record: ProgramRecord, name: string): WebGLUniformLocation | null {
    if (!record.uniforms.has(name)) {
      record.uniforms.set(name, this.gl.getUniformLocation(record.program, name));
    }
    return record.uniforms.get(name) ?? null;
  }

  private setUniform(record: ProgramRecord, name: string, value: number | number[]) {
    const location = this.uniformLocation(record, name);
    if (location === null) return;
    if (typeof value === 'number') {
      this.gl.uniform1f(location, value);
      return;
    }
    if (value.length === 2) this.gl.uniform2fv(location, value);
    else if (value.length === 3) this.gl.uniform3fv(location, value);
    else if (value.length === 4) this.gl.uniform4fv(location, value);
    else throw new Error(`Uniform ${name} must contain 2, 3, or 4 numbers`);
  }

  private getSubjectTexture(bitmap: ImageBitmap): WebGLTexture {
    const cached = this.textures.get(bitmap);
    if (cached) return cached;
    const texture = this.gl.createTexture();
    if (!texture) throw new Error('Unable to create subject texture');
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    // UNPACK_FLIP_Y_WEBGL is spec-ignored for ImageBitmap sources — route through a
    // scratch 2D canvas so the flip actually applies (otherwise subjects render upside down).
    const scratch = document.createElement('canvas');
    scratch.width = bitmap.width;
    scratch.height = bitmap.height;
    scratch.getContext('2d')!.drawImage(bitmap, 0, 0);
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, 1);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      scratch,
    );
    this.textures.set(bitmap, texture);
    return texture;
  }
}

class SharedGlRunner {
  private renderer: WebglRenderer | null = null;

  getCanvas(): HTMLCanvasElement {
    return this.getRenderer().canvas;
  }

  render(kernel: WebglKernel, ctx: FxContext, target: HTMLCanvasElement): GlRenderResult {
    try {
      const renderer = this.getRenderer();
      const result = renderer.render(kernel, ctx);
      if (!result.ok) return result;
      const g = target.getContext('2d');
      if (!g) throw new Error('2D blit context is unavailable');
      g.clearRect(0, 0, target.width, target.height);
      g.drawImage(renderer.canvas, 0, 0, target.width, target.height);
      return result;
    } catch (cause) {
      const error = cause instanceof Error ? cause : new Error(String(cause));
      console.error(`[glRunner] ${error.message}`);
      return { ok: false, error: error.message };
    }
  }

  private getRenderer(): WebglRenderer {
    if (this.renderer) return this.renderer;
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 180;
    this.renderer = new WebglRenderer(canvas);
    return this.renderer;
  }
}

/** The only WebGL context used by all live gallery/detail cards on a page. */
export const sharedGlRunner = new SharedGlRunner();
