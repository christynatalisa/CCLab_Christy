// Open the side tree view and see index.html.

let radioPink, radioCyan, radioOlive;

function setup() {
  createCanvas(400, 500);
  radioPink = document.getElementById("radio-pink");
  radioCyan = document.getElementById("radio-cyan");
  radioOlive = document.getElementById("radio-olive");
}

function draw() {
  background(220);

  let colorName = "white";
  if (radioPink.checked) {
    colorName = "pink";
  } else if (radioCyan.checked) {
    colorName = "cyan";
  } else if (radioOlive.checked) {
    colorName = "olive";
  }
  fill(colorName);
  ellipse(width / 2, height / 2, 250, 250);
}
