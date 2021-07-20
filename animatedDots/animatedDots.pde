int frames = 18;
int count, r;

PImage[] gifs = new PImage[frames];

void setup() {
  size(500, 500);
  background(0);
  frameRate(15);
  noStroke();
  count = 0;
  r = 10;
  for (int i = 0; i < frames; i++) {
    gifs[i] = loadImage("frame_" + str(i) + "_delay-0.1s.gif");
    gifs[i].resize(width, height);
  }
}

void draw() {
  println(gifs.length);
  if (count<frames) {
    dots(gifs[count]);
    count++;
  } else {
    count = 0;
  }
}

void dots(PImage frame) {
  for (int x = 0; x < width; x+=r) {
    for (int y = 0; y < height; y+=r) {
      color c = frame.get(x, y);
      fill(c);
      circle(x, y, r);
    }
  }
}
