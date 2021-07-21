int r = 50;
float x, y, z, vX, vY, vZ, depth;
color c = color(255, 0, 0);

void setup() {
  size(700, 700, P3D);
  depth = 1000;

  x = width/2;
  y = height/2;
  vX = random(-5, 5);
  vY = random(-5, 5);
  vZ = random(-5, 5);
}

void draw() {
  clear();
  background(200);
  lights();

  //box for scale
  pushMatrix();
  noFill();
  stroke(0);
  translate(width/2, height/2);
  box(width, height, depth);
  popMatrix();

  translate(x, y, z);
  noStroke();
  fill(c);
  sphere(r);

  x += vX;
  y += vY;
  z += vZ;

  if (x > width - r || x < r) {
    vX = vX * -1;
  }
  if (y > height - r || y < r) {
    vY = vY * -1;
  }
  if (z > depth - r || z < r) {
    vZ = vZ * -1;
  }
}
