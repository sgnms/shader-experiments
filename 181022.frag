precision mediump float;
uniform vec2 resolution; // 画面のサイズ
uniform float time; // VEDA起動からの経過時間(秒)

vec4 color_;
vec4 col;
vec2 st;

void setColor(vec4 c)
{
  color_ = c;
}

float crystal(float a)
{
  return abs(cos(a*12.)*sin(a*3.))*.8+.1;
}

float gear(float a)
{
  return smoothstep(-.5,1., cos(a*10.))*0.2+0.5;
}

float sakura(float a)
{
  return abs(cos(a*2.5))*.5+.3;
}

float plot(float r, float pct)
{
  return  smoothstep( pct-0.05, pct, r) -
          smoothstep( pct, pct+0.05, r);
}

void main()
{
  st = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

  float r = length(st);
  float t = time * 2.0;
  int pair_id = int(floor(mod(t, 3.0)));

  float a = atan(st.y, st.x) + time * 0.2; //回転させる

  //どこからどこまでをイージングさせるか
  float b = smoothstep(0.5, 0.8, mod(t, 1.0));

  float f;
  if(pair_id == 0) f = mix(crystal(a), gear(a), b);
  if(pair_id == 1) f = mix(gear(a), sakura(a), b);
  if(pair_id == 2) f = mix(sakura(a), crystal(a), b);

  setColor(vec4((st.x + 1.0)/2.0, (st.y + 1.0)/2.0, abs(sin(time)), 1.0));
  col = plot(r, f) * color_;
  gl_FragColor = col;
}
