precision mediump float;
uniform vec2 resolution; // 画面のサイズ
uniform float time; // VEDA起動からの経過時間(秒)

vec4 color_;
vec4 col;

vec2 st;

float easeOutQuart(float t)
{
  return 1.0 - (--t) * t * t * t;
}

void setColor(vec4 color)
{
  color_ = color;
}

float crystal(float a)
{
  return abs(cos(a*12.)*sin(a*3.))*.8+.1;
}

float gear(float a)
{
  return smoothstep(-.5,1., cos(a*10.))*0.2+0.5;
}

void main()
{
  st = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
  float r = length(st);
  float a = atan(st.y,st.x);

  float t = (sin(time) + 1.0) / 2.0;
  // t = 1.0 - easeOutQuart(t);
  float f = crystal(a) * t +  gear(a) * (1.0 - t);

  setColor(vec4((st.x + 1.0)/2.0, (st.y + 1.0)/2.0, abs(sin(time)), 1.0));
  col = vec4(vec3(1.0 - smoothstep(f, f + 0.02, r)), 1.0) * color_;

  gl_FragColor = col;
}
