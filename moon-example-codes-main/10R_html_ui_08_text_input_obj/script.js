// Open the side tree view and see index.html.

let texts = [];

function setup() {
  createCanvas(400, 500);
  background(220);
  textInput = document.getElementById("text-input");
}

function draw() {
  background(220);

  for (let i = 0; i < texts.length; i++) {
    let t = texts[i];
    t.move();
    t.display();
  }
}

function addText() {
  if (textInput.value != "") {
    texts.push(new FloatingText(0, random(height), textInput.value));
    textInput.value = "";
  }
}

class FloatingText {
  constructor(x, y, txt) {
    this.x = x;
    this.y = y;
    this.txt = txt;
    this.alpha = random(100, 220);
    this.size = random(5, 50);
    this.xSpd = random(0.5, 1.2);
    this.ySpd = 0;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  display() {
    push();
    noStroke();
    fill(0, this.alpha);
    textSize(this.size);
    text(this.txt, this.x, this.y);
    pop();
  }
}
