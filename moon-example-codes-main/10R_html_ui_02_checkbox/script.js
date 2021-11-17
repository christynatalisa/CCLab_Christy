// Open the side tree view and see index.html.

let checkboxRect, checkboxCircle;

function setup() {
  createCanvas(400, 500);
  checkboxRect = document.getElementById('checkbox-rect');
  checkboxCircle = document.getElementById('checkbox-circle');
}

function draw() {
  background(220);
  if (checkboxRect.checked) {
    rectMode(CENTER);
    rect(100, 250, 150, 150);
  }
  if (checkboxCircle.checked) {
    ellipse(300, 250, 150, 150);
  }
}
