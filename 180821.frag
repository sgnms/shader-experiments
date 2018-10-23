precision mediump float;
uniform vec2 resolution; // 画面のサイズ
uniform float time; // VEDA起動からの経過時間(秒)

vec2 st;

float width = 0.02;

vec4 line(float x, float y, float w, float h)
{
  vec2 line1 = step(vec2(x, y), st); //左下
  vec2 line2 = 1.0 - step(vec2(x + w, y + h), st); //右上
  return vec4(line1.x * line1.y * line2.x * line2.y);
}

void main(){
    st = gl_FragCoord.xy/resolution;

    width *= abs(sin(time));

    //横線
    vec4 col = line(0.0, 0.8, 1.0, width);
    col += line(0.0, 0.2, 1.0, width);
    col += line(0.0, 0.7, 1.0, width);

    //縦線
    col += line(0.2, 0.0, width, 1.0);
    col += line(0.4, 0.0, width, 1.0);
    col += line(0.8, 0.0, width, 1.0);

    gl_FragColor = col;
}
