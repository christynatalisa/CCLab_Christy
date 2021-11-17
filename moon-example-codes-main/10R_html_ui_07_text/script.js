// Open the side tree view and see index.html.

let textInput;

function setup() {
  createCanvas(400, 500);
  background(220);
  textInput = document.getElementById("text-input");
}

function draw() {
  fill(random(255), random(255), random(255));
  textAlign(CENTER);
  textSize(random(5, 30));
  let x = random(width);
  let y = random(height);
  let txt = textInput.value;
  text(txt, x, y);
}
