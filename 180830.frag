precision mediump float;
uniform vec2 resolution; // 画面のサイズ
uniform float time; // VEDA起動からの経過時間(秒)

vec4 color_;
vec4 c;

vec2 st;

void setColor(vec4 color)
{
  color_ = color;
}

void circle(float x, float y, float radius)
{
  vec2 pos = vec2(x, y);
  float dist = distance(st, pos);
  float temp_col = 1.0 - step(radius, dist);
  c += vec4(vec3(temp_col), 1.0) * color_;
}

void main()
{
  st = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

  float t = fract(time * 0.2);
  //緑
  setColor(vec4(0.2, 0.9, 0.2, 1.0) * step(t, 0.33));
  circle(-0.5, 0.0, 0.2);

  //黄
  setColor(vec4(0.9, 0.9, 0.2, 1.0) * (1.0 - (step(t, 0.33) + (1.0 - step(t, 0.66)))));
  circle(0.0, 0.0, 0.2);

  //赤
  setColor(vec4(0.9, 0.2, 0.2, 1.0) * (1.0 - step(t, 0.66) * step(t, 0.99)));
  circle(0.5, 0.0, 0.2);

  gl_FragColor = c;
}
