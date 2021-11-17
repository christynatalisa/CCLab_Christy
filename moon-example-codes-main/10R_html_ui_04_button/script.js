// Open the side tree view and see index.html.

let bgR = 100;
let bgG = 100;
let bgB = 100;

function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(bgR, bgG, bgB);
}

function changeBGColor() {
  bgR = random(255);
  bgG = random(255);
  bgB = random(255);
}
