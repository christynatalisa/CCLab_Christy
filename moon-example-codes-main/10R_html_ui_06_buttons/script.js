// Open the side tree view and see index.html.

let balls = [];
let circleR = 0;
let circleG = 0;
let circleB = 0;

function setup() {
  createCanvas(400, 500);
  background(230);
}

function draw() {
  background(230);

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.display();
  }

  // display the circle color
  fill(circleR, circleG, circleB);
  rect(10, 10, 30, 30);
}

function changeColor() {
  circleR = random(255);
  circleG = random(255);
  circleB = random(255);
}

function addCircle() {
  let ball = new Ball(
    width / 2,
    height / 2,
    random(5, 30),
    circleR,
    circleG,
    circleB
  );
  balls.push(ball);
}

class Ball {
  constructor(x, y, d, r, g, b) {
    this.x = x;
    this.y = y;
    this.dia = d;
    this.xSpd = random(-1, 1);
    this.ySpd = random(-1, 1);
    this.r = r;
    this.g = g;
    this.b = b;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  display() {
    push();
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.dia);
    pop();
  }
}
