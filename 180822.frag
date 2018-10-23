precision mediump float;
uniform vec2 resolution; // 画面のサイズ
uniform float time; // VEDA起動からの経過時間(秒)

vec2 st;

float width = 0.02;
vec4 set_color;
vec4 col;

vec4 line(float x, float y, float w, float h, vec4 color)
{
  vec2 line1 = step(vec2(x, y), st); //左下
  vec2 line2 = 1.0 - step(vec2(x + w, y + h), st); //右上
  return vec4(line1.x * line1.y * line2.x * line2.y * color);
}

void main(){
    st = gl_FragCoord.xy/resolution;

    float v = abs(sin(time));

    //横線
    set_color = vec4(1.0, 1.0, 1.0, 1.0) * v;
    col = line(0.0, 0.8, 1.0, width, set_color);

    set_color = vec4(0.3, 1.0, 1.0, 1.0) * v;
    col += line(0.0, 0.2, 1.0, width, set_color);

    set_color = vec4(0.1, 0.4, 0.6, 1.0) * v;
    col += line(0.0, 0.7, 1.0, width, set_color);

    //縦線
    set_color = vec4(0.3, 0.4, 0.8, 1.0) * v;
    col += line(0.2, 0.0, width, 1.0, set_color);

    set_color = vec4(0.7, 0.3, 0.3, 1.0) * v;
    col += line(0.4, 0.0, width, 1.0, set_color);

    set_color = vec4(0.3, 0.3, 0.3, 1.0) * v;
    col += line(0.8, 0.0, width, 1.0, set_color);

    gl_FragColor = col;
}
