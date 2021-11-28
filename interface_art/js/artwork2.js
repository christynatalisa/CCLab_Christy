let radius = 200;
let a = 0;
let b = 700;
function setup() {
  createCanvas(700, 700);
  background(0);frameRate(200);
}

function draw() {
  let amp = 50;
  let x = frameCount % width;

  //Let's draw a colorful flower!
  // let radius = 200;
  let angle = radians(frameCount);

  // let posX = radius * cos(angle) + noise(angle)*50;
  // let posY = radius * sin(angle) + noise(angle)*50;

  let posX = radius * cos(angle);
  let posY = radius * sin(angle);
  radius= radius-0.1;

  let r = map(cos(angle), -1, 1, 0, 255);
  let g = map(sin(angle), -1, 1, 0, 255);
  let b = map(noise(angle), 0, 1, 0, 255);

  push();
  translate(width / 2, height / 2);
  stroke(r, g, b, 200);
  line(0, 0, posX, posY);
  fill(r, g, b);
  noStroke();
  ellipse(posX, posY, 5);
  pop();

  radius = radius + 0.01;

  //border time!
  let y1 = sin(frameCount * 0.05) * amp;
  let y4 = noise(frameCount * 0.05) * amp;
  let y5 = y1 + y4;
  let y2 = random(700);
  fill(255);
  ellipse(x, y2, 2);

  a = a +1;
  b = b-1;
  fill(r,g,b);
  noStroke();
  rect(a, y5, 55, 55, 10);

  fill(r,g,b);
  rect(a, y5+100, 55, 55, 10);

  fill(r,g,b);
  rect(a, y5+500, 55, 55, 10);

  fill(r,g,b);
  rect(y5, a, 55, 55, 10);

  fill(r,g,b);
  rect(y5+580, a, 55, 55, 10);

  fill(r,g,b);
  rect(a, y5+600, 55, 55, 10);
}
