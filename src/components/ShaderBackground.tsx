import { useEffect, useRef } from 'react';

const VERTEX_SHADER = `
attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                     -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.y = 1.0 - st.y;
    float aspect = u_resolution.x / u_resolution.y;
    vec2 p = st;
    p.x *= aspect;

    float t = u_time * 0.22;

    // Premium dark luxury obsidian background base
    vec3 bg = vec3(0.045, 0.045, 0.052);

    // Subtle dark ambient variation
    float bgNoise = snoise(p * 1.2 + vec2(t * 0.1, t * 0.06));
    vec3 ambientTone = vec3(0.065, 0.066, 0.075) * max(0.0, bgNoise);

    // Grid coordinate calculations for dots
    vec2 gridUV = p * 24.0;
    vec2 gridId = floor(gridUV);
    vec2 gridF = fract(gridUV) - 0.5;

    // Organic drift motion
    float n1 = snoise(gridId * 0.14 + vec2(t * 0.4, t * 0.25));
    float n2 = snoise(gridId * 0.16 - vec2(t * 0.3, t * 0.2));
    vec2 dotOffset = vec2(n1, n2) * 0.35;

    // Pointer-driven motion
    if (u_mouse.x > 0.0 || u_mouse.y > 0.0) {
        vec2 m = u_mouse / u_resolution;
        m.y = 1.0 - m.y;
        m.x *= aspect;

        vec2 cellCenterWorld = (gridId + 0.5) / 24.0;
        vec2 toMouse = cellCenterWorld - m;
        float mouseDist = length(toMouse);

        float radius = 0.45;
        if (mouseDist < radius) {
            float strength = smoothstep(radius, 0.0, mouseDist);
            vec2 dir = normalize(toMouse + vec2(0.0001));
            vec2 swirl = vec2(-dir.y, dir.x) * 0.3;
            dotOffset += (dir * 0.55 + swirl) * strength;
        }
    }

    float dist = length(gridF - dotOffset);

    // Dot size: subtle, crisp dots
    float size = 0.05 + 0.025 * sin(dot(gridId, vec2(0.3, 0.35)) + t * 1.5);
    float dotAlpha = smoothstep(size, size - 0.02, dist);

    // Dots: lighter shade of obsidian
    vec3 dotColor = vec3(0.19, 0.195, 0.215);

    // Dynamic brightness near pointer
    if (u_mouse.x > 0.0 || u_mouse.y > 0.0) {
        vec2 m = u_mouse / u_resolution;
        m.y = 1.0 - m.y;
        m.x *= aspect;
        vec2 cellCenterWorld = (gridId + 0.5) / 24.0;
        float mDist = length(cellCenterWorld - m);
        float mNear = smoothstep(0.4, 0.0, mDist);
        dotColor += vec3(0.08, 0.08, 0.09) * mNear;
    }

    // Blend dots over background
    vec3 finalColor = bg + ambientTone + (dotColor * dotAlpha);

    // Elegant subtle edge vignette
    float vignette = smoothstep(1.35, 0.35, length(st - 0.5));
    finalColor *= vignette;

    gl_FragColor = vec4(finalColor, 1.0);
}`;

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

const ShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const glCtx = gl as WebGLRenderingContext;

    const prog = glCtx.createProgram();
    if (!prog) return;

    const vs = createShader(glCtx, glCtx.VERTEX_SHADER, VERTEX_SHADER);
    const fs = createShader(glCtx, glCtx.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    glCtx.attachShader(prog, vs);
    glCtx.attachShader(prog, fs);
    glCtx.linkProgram(prog);
    glCtx.useProgram(prog);

    const buf = glCtx.createBuffer();
    glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buf);
    glCtx.bufferData(
      glCtx.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      glCtx.STATIC_DRAW
    );

    const pos = glCtx.getAttribLocation(prog, 'a_position');
    glCtx.enableVertexAttribArray(pos);
    glCtx.vertexAttribPointer(pos, 2, glCtx.FLOAT, false, 0, 0);

    const uTime = glCtx.getUniformLocation(prog, 'u_time');
    const uRes = glCtx.getUniformLocation(prog, 'u_resolution');
    const uMouse = glCtx.getUniformLocation(prog, 'u_mouse');

    mouseRef.current = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouseRef.current.x = nx * canvas.width;
        mouseRef.current.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = (t: number) => {
      if (typeof ResizeObserver === 'undefined') syncSize();
      glCtx.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) glCtx.uniform1f(uTime, t * 0.001);
      if (uRes) glCtx.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) glCtx.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);
      glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4);
      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="shader-background"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        zIndex: 0,
      }}
    />
  );
};

export default ShaderBackground;
