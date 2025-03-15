precision mediump float;

uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec4 color = texture2D(u_texture, v_texCoord);
  float r = color.r;
  float g = color.g;
  float b = color.b;

  // Apply sepia filter
  float sepiaR = dot(vec3(0.393, 0.769, 0.189), vec3(r, g, b));
  float sepiaG = dot(vec3(0.349, 0.686, 0.168), vec3(r, g, b));
  float sepiaB = dot(vec3(0.272, 0.534, 0.131), vec3(r, g, b));

  gl_FragColor = vec4(sepiaR, sepiaG, sepiaB, color.a);
}