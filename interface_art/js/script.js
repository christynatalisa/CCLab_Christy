let rSlider, gSlider, bSlider;

function setup() {
  // create canvas
  let canvas = createCanvas(710, 400);
  canvas.parent("canvasContainer");
  background(0,0,200);
  //canvas.id("p5-canvas");

  textSize(15);
  noStroke();

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
}

function draw() {
  scale(0.5)；
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);
}
