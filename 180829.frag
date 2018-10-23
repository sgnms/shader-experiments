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
  dist = 1.0 - step(radius, dist);
  vec4 col = vec4(vec3(dist), 1.0) * color_;
  return col;
}

void main()
{
  st = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
  // vec2 origin = vec2(0, 0);
  // float dist = distance(p, origin);
  // setColor(vec4(1.0, 0.2, 0.2, 1.0));
  setColor(vec4((st.x + 1.0)/2.0, (st.y + 1.0)/2.0, fract(time * 0.2), 1.0));
  col = circle(0.0, 0.0, 2.5 * fract(time * 0.2));
  //
  // setColor(vec4(0.9, 0.2, 0.2, 0.4));
  // dist = step(0.9, dist);
  // dist = smoothstep(0.5, 0.6 + sin(time), dist);

  gl_FragColor = col;
}
