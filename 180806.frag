precision mediump float;
uniform vec2 resolution; // 画面のサイズ
uniform float time; // VEDA起動からの経過時間(秒)

void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
    vec2 center = vec2(0.0, 0.0);
    float dist = distance(center, p);
    float step = step(abs(sin(time)) * 0.6, dist);
    float col = 1.0 - step;
    // vec3 color = vec3(cos(col * 0.5), sin(col * 0.5), cos(col * 0.2));
    gl_FragColor = vec4(vec3(col), 0.1);
}
