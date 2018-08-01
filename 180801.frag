precision mediump float;
uniform vec2 resolution; // 画面のサイズ
uniform float time; // VEDA起動からの経過時間(秒)

void main() {
    vec3 color = vec3(
      sin(gl_FragCoord.x / resolution.x * 41.0 + cos(time * 0.5)) + cos(gl_FragCoord.y / resolution.y * 43.0 + sin(time * 0.3)),
      sin(gl_FragCoord.x / resolution.x * 42.0 + sin(time * 0.2)) + cos(gl_FragCoord.y / resolution.y * 42.0 + sin(time * 0.4)),
      sin(gl_FragCoord.x / resolution.x * 43.0 + sin(time * 0.4)) + cos(gl_FragCoord.y / resolution.y * 41.0 + sin(time * 0.2))
    );

    gl_FragColor = vec4(color, 1.0);
}
