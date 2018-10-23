precision mediump float;
uniform vec2 resolution; // 画面のサイズ
uniform float time; // VEDA起動からの経過時間(秒)

float line_width = 1.0;

void main(){
    vec2 st = gl_FragCoord.xy/resolution;

    line_width *= abs(sin(time * 5.0));
    vec2 line = step(vec2(line_width), st); //左下
    vec2 line2 = step(vec2(line_width), 1.0 - st); //右上
    // vec2 line2 = 1.0 - step(vec2(0.9), st); //右上

    vec4 col = vec4(line.x * line.y * line2.x * line2.y);
    gl_FragColor = col;
}
