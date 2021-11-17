// Open the side tree view and see index.html.

let sliderR, sliderG, sliderB;

function setup() {
  createCanvas(400, 500);
  sliderR = document.getElementById("slider-r");
  sliderG = document.getElementById("slider-g");
  sliderB = document.getElementById("slider-b");
}

function draw() {
  let bgR = sliderR.value;
  let bgG = sliderG.value;
  let bgB = sliderB.value;
  background(bgR, bgG, bgB);
}
