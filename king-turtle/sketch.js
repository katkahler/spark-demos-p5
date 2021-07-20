function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  translate(100, 200);
  
  //legs
  fill('#387045');
  ellipse(100, 100, 25, 100);
  ellipse(175, 100, 25, 100);
  ellipse(250, 100, 25, 100);
  ellipse(325, 100, 25, 100);
  
  //shell
  fill('#826344');
  line(25, 100, 335, 100);
  arc(200, 100, 275, 275, PI, TWO_PI);
  
  //head and face and crown
  fill('#387045');
  circle(50,75,100);
  fill('#c7f0d0');
  circle(25, 75, 25);
  circle(75, 75, 25);
  line(25, 100, 75, 100);
  fill('#ffe042');
  crown();
  
}

function crown() {
  beginShape();
  vertex(0, 0);
  vertex(25, 25);
  vertex(50, 0);
  vertex(75, 25);
  vertex(100, 0);
  vertex(100, 50);
  vertex(0, 50);
  vertex(0, 0);
  endShape();
}
