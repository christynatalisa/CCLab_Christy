function setup() {
  createCanvas(400, 400);
}

function preload() {
  logo = loadImage("assets/yourcity.png");
}

function draw() {
  background(0);

  tint(255, 128 + 128 * sin(millis() / 1000));
  image(logo, 0, 0, 400, 400);

}
