precision mediump float;
uniform vec2 resolution; // 画面のサイズ
uniform float time; // VEDA起動からの経過時間(秒)

vec2 st;

float width = 0.02;
vec4 color_;
vec4 col;

void setColor(vec4 color)
{
  color_ = 1.0 - color;
}

vec4 rect(float x, float y, float w, float h, vec4 color)
{
  vec2 corner1 = step(vec2(x, y), st); //左下
  vec2 corner2 = 1.0 - step(vec2(x + w, y + h), st); //右上
  vec2 corners = corner1 * corner2;
  return vec4(corners.x * corners.y * color);
}

void main(){
    st = gl_FragCoord.xy/resolution;

    float v = abs(sin(time));

    //赤
    setColor(vec4(0.9, 0.2, 0.2, 0.4) * v);
    col = rect(0.0, 0.6, 0.2, 0.4, color_);

    //黄
    setColor(vec4(0.9, 0.9, 0.2, 0.4) * v);
    col += rect(0.9, 0.6, 0.2, 0.4, color_);

    //青
    setColor(vec4(0.2, 0.2, 0.9, 0.4) * v);
    col += rect(0.7, 0.0, 0.3, 0.1, color_);

    //黒線
    setColor(vec4(0.0, 0.0, 0.0, 1.0) * v);
    //横線
    col += rect(0.0, 0.8, v, width, color_);
    col += rect(0.0, 0.6, 1.0 - v, width, color_);
    col += rect(0.2, 0.1, 0.4 + 0.4 * v, width, color_);

    //縦線
    col += rect(0.2 * v, 0.6, width, 0.7, color_);
    col += rect(0.2, 0.0, width, 0.6 + 0.4 * v, color_);
    col += rect(0.7, 0.0, width, v, color_);
    col += rect(0.9, 0.0, width, 1.0 - v, color_);

    gl_FragColor = vec4(0.9, 0.9, 0.85, 1.0) - col;
}
