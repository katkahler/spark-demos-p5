let img, img2;
let cnv, c, _c, x, y, _x, _y, change;

function preload() {
  img = loadImage("https://images.saymedia-content.com/.image/t_share/MTc5NjQ1ODEzMTgwNDA5ODE2/the-tragedy-of-eren-yeager-how-the-character-changes-throughout-attack-on-titan.png");
  img2 = loadImage("https://i1.sndcdn.com/artworks-1DHkgMyuVHL16UwX-FsYLQA-t500x500.jpg");
  
}

function setup() {
  cnv = createCanvas(1000, 500);

  img.resize(width/2, height); //first image is square
  img2.resize(width/2, height); //second image is square
  x = 0;
  y = 0;
  _x = (width/2) + 1;
  _y = 0;
  change = 5;

}

function draw() {
first();
next();
}

function first() {
    if (x > width/2 && y > height){
    clear();
    x = 0;
    y = 0;

  }
    c = img.get(x, y);
    noStroke();
    fill(c);
    circle(x, y, change);
    if (x > width/2) {
      y = y + change;
      x = 0;
    }
    x = x + change;
}

function next(){
  if (_x > width && _y > height){
    clear();
    _x = width/2;
    _y = 0;
    boy = boys[random(31)];
  }
    _c = img2.get(x, y);
    noStroke();
    fill(_c);
    circle(_x, _y, change);
    if (_x > width) {
      _y = _y + change;
      _x = width/2;
    }
    _x = _x + change;
}

