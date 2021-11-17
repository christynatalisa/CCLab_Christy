// Open the side tree view and see index.html.

let circleR = 100;
let circleG = 100;
let circleB = 100;

function setup() {
  createCanvas(400, 500);
  background(230);
}

function draw() {
  // no background
  fill(circleR, circleG, circleB);
  rect(10, 10, 50, 50);
}

function changeColor() {
  circleR = random(255);
  circleG = random(255);
  circleB = random(255);
}

function drawCircle() {
  fill(circleR, circleG, circleB);
  circle(random(width), random(height), random(10, 150));
}
