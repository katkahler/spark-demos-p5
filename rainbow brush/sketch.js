let img;

function preload() {
  img = loadImage(
    "https://t4.ftcdn.net/jpg/02/31/11/99/360_F_231119951_ApShyIjK1eZ6VLLWSDxGlwtEK7MXdXze.jpg"
  );
}

function setup() {
  createCanvas(800, 400);
  background(255);
  noStroke();
  img.resize(width, height);
}

function draw() {
  singleStroke(mouseX, mouseY);
}

function singleStroke(x, y) {
  let r = random(4, 8);
  for (let i = 0; i < r; i++) {
    let _x = random(x - 100, x + 100);
    let _y = random(y - 100, y + 100);
    let c = img.get(_x, _y);
    
    if (_x < 0) {
      c = img.get(0, _y);
    }
    if(_x > width){
      c = img.get(width, _y);
    }
    if (_y < 0){
      c = img.get(_x, 0);
    }
    if (_y > height){
      c = img.get(_x, height);
    }
    
    fill(c);
    circle(_x, _y, random(5, 75));
  }
}
