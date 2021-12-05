let sliderX;
let sliderY;
let sliderSize;

let button;
let frame = false;
let tutorial = false;

let imgs = []; // GH: array of images
let click;
let nextImg = 0; // GH: what the next image is
let buildings = []; // GH: array of Building objects

function preload() {
  // GH: storing the images straight into an array
  imgs.push(loadImage("assets/1.png"));
  imgs.push(loadImage("assets/2.png"));
  imgs.push(loadImage("assets/3.png"));
  imgs.push(loadImage("assets/4.png"));
  imgs.push(loadImage("assets/5.png"));
  imgs.push(loadImage("assets/6.png"));

  logo = loadImage("assets/yourcity.png");
  spotlight = loadImage("assets/spotlight.png");
  sizetut = loadImage("assets/sizetut.png");


  loctut = loadImage("assets/loctut.png");

  click = loadSound('sounds/click.mp3');

}

function setup() {
  createCanvas(1400, 800);

  checkbox = createCheckbox('Tutorial', false);
  checkbox.changed(tutorialfunc);
  checkbox.position(130, 120);
  checkbox.style('color', 'White');
  checkbox.id("checkmark");

  sliderX = createSlider(0, 1300, 0, 1);
  sliderX.position(550, 690);
  sliderX.style("width", "500 px");
  sliderX.id("sliderX");

  sliderY = createSlider(0, 700, 0, 1);
  sliderY.position(1000, 470);
  sliderY.style("transform", "rotate(90deg)");
  sliderY.id("sliderY");

  sliderSize = createSlider(0, 2, 1, 0.05);
  sliderSize.position(120, 470);
  sliderSize.style("transform", "rotate(270deg)");
  sliderSize.id("sliderSize");

  buttonA = createButton("petronas");
  buttonA.position(250, 90);
  buttonA.id("petronas");
  buttonA.mousePressed(towerImgA);

  buttonB = createButton("burj khalifa");
  buttonB.position(360, 90);
  buttonB.id("burj");
  buttonB.mousePressed(towerImgB);

  buttonC = createButton("pisa tower");
  buttonC.position(480, 90);
  buttonC.id("pisa");
  buttonC.mousePressed(towerImgC);

  buttonD = createButton("chrysler");
  buttonD.position(595, 90);
  buttonD.id("chry");
  buttonD.mousePressed(towerImgD);

  buttonE = createButton("taj mahal");
  buttonE.position(695, 90);
  buttonE.id("taj");
  buttonE.mousePressed(towerImgE);

  buttonF = createButton("space needle");
  buttonF.position(800, 90);
  buttonF.id("space");
  buttonF.mousePressed(towerImgF);

  buttonG = createButton("Save Here");
  buttonG.position(700, 770);
  buttonG.id("save");
  buttonG.mousePressed(saveCity);

  sizetut.resize(180*2, 180*2);
  loctut.resize(200*2, 200*2);
}

class Building {
  constructor(img, x, y, w, h) {
    this.width = w;
    this.height = h;
    this.img = img;
    this.size = 20;
    this.color = color(255, 0, 0);
    this.x = x;
    this.y = y;
    this.scale = 1;
  }

  display() {
    // GH: added
    // scale(this.scale);
    // image(this.img, this.x, this.y, this.width, this.height);

    push();
    translate(this.x, this.y);
    scale(this.scale);
    image(this.img, 0, 0, this.width, this.height);
    pop();
  }

  move() {}
}


function tutorialfunc() {

  if (this.checked()) {
      tutorial = true;
    } else {
      tutorial = false;
    }
}

function towerImgA() {
  click.play();
  let petronasBuilding = new Building(imgs[0], 50, 300, 150, 400);
  buildings.push(petronasBuilding);
}

function towerImgB() {
  click.play();
  let burjBuilding = new Building(imgs[1], 50, 300, 300, 360);
  buildings.push(burjBuilding);
}

function towerImgC() {
  click.play();
  let pisaBuilding = new Building(imgs[2], 30, 200, 240, 300);
  buildings.push(pisaBuilding);
}

function towerImgD() {
  click.play();
  let chryBuilding = new Building(imgs[3], 200, 300, 270, 470);
  buildings.push(chryBuilding);
}
function towerImgE() {
  click.play();
  let tajBuilding = new Building(imgs[4], 150, 300, 270, 300);
  buildings.push(tajBuilding);
}

function towerImgF() {
  click.play();
  let spaceBuilding = new Building(imgs[5], 150, 300, 240, 440);
  buildings.push(spaceBuilding);
}

function framefunction() {
  fill(255);
  //add black rects to cover all the stuffs
  // rect(0, 10, 200, 800);
  // rect(0, 10, 800, 300);
  // rect(900, 10, 300, 900);
  // rect(10, 900, 900, 300);
}

function saveCity() {
  //saveCanvas('myCanvas', 'png');
  //frame = True;
  //if (frame == True) {
  click.play();
  framefunction();
  saveCanvas("myCanvas", "png");
  frame = true;

  let petronasBtn = document.getElementById("petronas");
  petronasBtn.style.display = "none";
  let burjBtn = document.getElementById("burj");
  burjBtn.style.display = "none";
  let pisaBtn = document.getElementById("pisa");
  pisaBtn.style.display = "none";
  let chryBtn = document.getElementById("chry");
  chryBtn.style.display = "none";
  let tajBtn = document.getElementById("taj");
  tajBtn.style.display = "none";
  let spaceBtn = document.getElementById("space");
  spaceBtn.style.display = "none";
  let saveBtn = document.getElementById("save");
  saveBtn.style.display = "none";

  let slideX = document.getElementById("sliderX");
  slideX.style.display = "none";
  let slideY = document.getElementById("sliderY");
  slideY.style.display = "none";
  let slideSize = document.getElementById("sliderSize");
  slideSize.style.display = "none";

  let checkboxx = document.getElementById("checkmark");
  checkboxx.style.display = "none";
}

function draw() {
  clear();
  background(0);
  //console.log(mouseX, mouseY);

  noStroke();
  fill(92, 115, 120);
  rect(240, 120, 1000, 450, 10, 10);
  //tint(255, 128 + 128 * sin(millis() / 1000));

  if (frame == false) {

    image(logo, 1050, 7, 180, 180);
    fill(255);
    text("Horizontal Slider:", 300, 630);

    push();
    translate(1280, 270);
    rotate(radians(-90));
    text("Vertical Slider:", 0, 0);
    pop();

    push();
    translate(180, 590);
    rotate(radians(-90));
    sizetext = text("Size Slider:", 0, 0);
    pop();

    text("Design Your City, select buildings here: ", 250, 50);

    text("Done designing Your City?", 680, 720);

    if (tutorial == true) {
      image(sizetut, 20, 570, 180, 180);
      //, 180, 180);
      image(loctut, 1070, 580, 200, 200);
    }
  }


  tint(255);
  fill("White");
  //text("Design Your City, select builings here: ", 120, 30);

  if (buildings.length > 0) {
    let newestBuilding = buildings[buildings.length - 1];
    // scale(sliderSize.value());
    newestBuilding.x = sliderX.value();
    newestBuilding.y = sliderY.value();

    newestBuilding.scale = sliderSize.value();
  }

  // GH: call the draw method on all buildings
  for (let i = 0; i < buildings.length; i++) {
    buildings[i].display();
  }

  if (frame == true) {
    framefunction();
    image(spotlight, 300, 10, 300, 600);
    image(spotlight, 600, 10, 300, 600);
    image(spotlight, 900, 10, 300, 600);
  }


}
