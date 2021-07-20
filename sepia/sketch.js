let boy;

function preload() {
  boy = loadImage("image.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(average(255, 64, 255));
  console.log(average(255, 64, 255));
  boy.resize(width, height);

  boy.loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let c = boy.get(x, y);
      let r = red(c);
      let g = green(c);
      let b = blue(c);

      let mean = average(r, g, b);
      let meanPercent = mean / 255
      
      boy.set(x, y, color(meanPercent * 255, meanPercent * 130, meanPercent*45));
    }
  }
  boy.updatePixels();

  image(boy, 0, 0);
}

function draw() {}

function average(r, g, b) {
  let mean = (r + g + b) / 3;
  return mean;
}
