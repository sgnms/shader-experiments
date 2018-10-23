precision mediump float;
uniform vec2 resolution; // 画面のサイズ
uniform float time; // VEDA起動からの経過時間(秒)

void main() {
  // vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
  vec2 p = gl_FragCoord.xy / resolution;

  vec2 start_pos = vec2(mod(time / 2.0, 0.5), mod(time / 2.0, 0.5));
  vec3 col = vec3(smoothstep(start_pos.x, 0.5, p.x) - smoothstep(0.5, 1.0 - start_pos.y, p.x));
  gl_FragColor = vec4(vec3(col), 1.0);
}
