precision mediump float;
uniform vec2 resolution; // 画面のサイズ
uniform float time; // VEDA起動からの経過時間(秒)

vec4 color_;
vec4 col;

vec2 st;

void setColor(vec4 color)
{
  color_ = color;
}

vec4 circle(float x, float y, float radius)
{
  vec2 pos = vec2(x, y);
  float dist = distance(st, pos);

  //円の輪郭をぼかす。
  //smoothstep(a, b, x)はab補間を行うので、0.0, 1.0だったら滑らかだし、
  //0.4, 0.5みたいな感じだったら、そこだけが滑らかになるので0.0...0.4, 0.5...1.0みたいになる。
  dist = smoothstep(radius - 0.01, radius + 0.01, dist);
  // dist = 1.0 - smoothstep(radius - 0.01, radius + 0.01, dist); //色を反転させる
  vec4 col = vec4(vec3(dist), 1.0) * color_;
  return col;
}

void main()
{
  st = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

  setColor(vec4((st.x + 1.0)/2.0, (st.y + 1.0)/2.0, abs(sin(time)), 1.0));
  col = circle(0.0, 0.0, 0.5);

  // setColor(vec4(0.5, 0.5, 0.5, 1.0));
  // col += circle(1.0, 0.0, 0.5);

  gl_FragColor = col;
}
