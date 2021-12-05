let click;

function setup() {
  createCanvas(500, 500);


}

function preload() {
  logo = loadImage("assets/yourcity.png");
  click = loadSound('sounds/click.mp3');

}

function redirectMe() {
  window.location = 'result.html';
}

function next() {
  click.play();
  setTimeout(redirectMe, 1500);
}

function draw() {
  background(0);


  tint(255, 128 + 128 * sin(millis() / 1000));
  image(logo, 50, 20, 400, 400);

  buttonA = createButton("start");
  buttonA.position(680, 650);
  buttonA.id("petronas");
  buttonA.mousePressed(next);

}
