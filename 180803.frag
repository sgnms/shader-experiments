precision mediump float;
uniform vec2 resolution; // 画面のサイズ
uniform float time; // VEDA起動からの経過時間(秒)

void main() {
    vec2 p = gl_FragCoord.xy / resolution;
    vec2 center = vec2(0.5, 0.5);
    float dist = distance(center, p);
    float step = step(0.3, dist);
    gl_FragColor = vec4(vec3(step), 0.1);
}
