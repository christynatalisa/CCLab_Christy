let sliderX;
let sliderY;
let sliderSize;

let button;
let frame;

let imgs = []; // GH: array of images
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
}

function setup() {
  createCanvas(1400, 800);

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

  buttonP = createButton("petronas");
  buttonP.position(250, 90);
  buttonP.mousePressed(towerImgA);

  buttonB = createButton("burj khalifa");
  buttonB.position(330, 90);
  buttonB.mousePressed(towerImgB);

  buttonB = createButton("gran torre");
  buttonB.position(420, 90);
  buttonB.mousePressed(towerImgC);

  buttonB = createButton("chrysler");
  buttonB.position(510, 90);
  buttonB.mousePressed(towerImgD);

  buttonB = createButton("taj mahal");
  buttonB.position(590, 90);
  buttonB.mousePressed(towerImgE);

  buttonB = createButton("space needle");
  buttonB.position(670, 90);
  buttonB.mousePressed(towerImgF);

  buttonB = createButton("Save Here");
  buttonB.position(720, 770);
  buttonB.mousePressed(saveCity);

  //let frame = False;
}


class Building {
  constructor(img, x, y, w, h, s) {
    this.width = w;
    this.height = h;
    this.img = img;
    this.size = 20;
    this.color = color(255, 0, 0);
    this.x = x;
    this.y = y;
    this.scale = s;

  }

  display() {
    // GH: added
    image(this.img, this.x, this.y, this.width, this.height, this.scale);
  }

  move() {}
}

function towerImgA() {
  let petronasBuilding = new Building(imgs[0], 50, 300, 120, 400, sliderSize.value());
  buildings.push(petronasBuilding);
}

function towerImgB() {
  let burjBuilding = new Building(imgs[1], 50, 300, 200, 360, sliderSize.value());
  buildings.push(burjBuilding);
}

function towerImgC() {
  let granBuilding = new Building(imgs[2], 30, 200, 120, 400, sliderSize.value());
  buildings.push(granBuilding);
}

function towerImgD() {
  let chryBuilding = new Building(imgs[3], 200, 300, 270, 470);
  buildings.push(chryBuilding);
}
function towerImgE() {
  let tajBuilding = new Building(imgs[4], 150, 300, 240, 440);
  buildings.push(tajBuilding);
}

function towerImgF() {
  let spaceBuilding = new Building(imgs[5], 150, 300, 240, 440);
  buildings.push(spaceBuilding);
}

function framefunction() {
  fill(White);
  //add black rects to cover all the stuffs
  rect(0, 10, 200, 800);
  rect(0, 10, 800, 300);
  rect(900, 10, 300, 900);
  rect(10, 900, 900, 300);

}

function saveCity() {
  //saveCanvas('myCanvas', 'png');
  //frame = True;
  //if (frame == True) {
    framefunction();

  saveCanvas('myCanvas', 'png');

  //window.location = 'https//nyu.edu';
}


function draw() {
  clear();
  //console.log(mouseX, mouseY);

  noStroke();
  fill(92, 115, 120);
  rect(240, 120, 1000, 450, 10, 10);
  tint(255, 128 + 128 * sin(millis() / 1000));
  logo1 = image(logo, 1050, 7, 180, 180);
tint(255);
fill("White");
  //text("Design Your City, select builings here: ", 120, 30);

  let  hori = text("Horizontal Slider:", 300, 630);

  push();
  translate(1280, 270);
  rotate(radians(-90));
  let verti = text("Vertical Slider:", 0, 0);
  pop();

  push();
  translate(180, 570);
  rotate(radians(-90));
  text("Size Slider:", 0, 0);
  pop();

  text("Done designing Your City?", 680, 680);

  if (buildings.length > 0) {
    scale(sliderSize.value());
    let newestBuilding = buildings[buildings.length - 1];
    newestBuilding.x = sliderX.value();
    newestBuilding.y = sliderY.value();
  }

  // GH: call the draw method on all buildings
  for (let i = 0; i < buildings.length; i++) {
    buildings[i].display();
  }
}
