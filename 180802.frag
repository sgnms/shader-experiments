precision mediump float;
uniform vec2 resolution; // 画面のサイズ
uniform float time; // VEDA起動からの経過時間(秒)
#define PI 3.141593

// あとで使う変数
vec3 color = vec3(0.0);
float angle = 0.0;

void main() {
    // ピクセルの位置
    vec2 p = gl_FragCoord.xy / resolution;
    // 画面中央を原点にする
    p -= .5;
    p.x *= resolution.x / resolution.y;

    // atan関数で角度を取得
    angle = atan(-p.x, p.y) / PI + 1.0; // atanは-PIからPIの範囲を返す

    color.r = sin(angle * 10.0 * PI + time);
    color.g = sin(angle * 10.1 * PI + time);
    color.b = sin(angle * 10.2 * PI + time);

    gl_FragColor = vec4(color, 1.0);
}
