let sliderX;
let sliderY;
let button;

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
  logo = loadImage("assets/yourcity.png");
}

function setup() {
  createCanvas(1400, 700);

  sliderX = createSlider(0, 500, 0, 1);
  sliderX.position(550, 690);
  sliderX.style("width", "500 px");
  sliderX.id("sliderX");

  sliderY = createSlider(0, 500, 0, 1);
  sliderY.position(1000, 470);
  sliderY.style("transform", "rotate(90deg)");
  sliderY.id("sliderY");

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

  buttonB = createButton("Save Here");
  buttonB.position(720, 750);
  buttonB.mousePressed(saveCity);
}

function mousePressed() {
  /*
  // GH: create a new building object with the next image
  let building = new Building(imgs[nextImg], mouseX, mouseY);
  // GH: and add it to our array of buildings
  buildings.push(building);

  // GH: update the value of nextImg, so that we see a different building next time
  nextImg++;
  if (nextImg == imgs.length) {
    nextImg = 0;
  }
  */
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
  }

  display() {
    // GH: added
    image(this.img, this.x, this.y, this.width, this.height);
  }

  move() {}
}

function towerImgA() {
  let petronasBuilding = new Building(imgs[0], 50, 300, 120, 400);
  buildings.push(petronasBuilding);
}

function towerImgB() {
  let burjBuilding = new Building(imgs[1], 50, 300, 200, 360);
  buildings.push(burjBuilding);
}

function towerImgC() {
  let granBuilding = new Building(imgs[2], 30, 200, 120, 400);
  buildings.push(granBuilding);
}

function towerImgD() {
  let chryBuilding = new Building(imgs[3], 200, 300, 280, 480);
  buildings.push(chryBuilding);
}
function towerImgE() {
  let tajBuilding = new Building(imgs[4], 150, 300, 240, 440);
  buildings.push(tajBuilding);
}

function saveCity() {
  saveCanvas('myCanvas', 'png');
  hori = '';
  verti = '';
}

function draw() {
  //scale(2);
  background(0);
  //console.log(mouseX, mouseY);

  noStroke();
  fill(92, 115, 120);
  rect(240, 120, 1000, 450, 10, 10);
  image(logo, 1050, 7, 180, 180);

  fill("White");
  //text("Design Your City, select builings here: ", 120, 30);

  let  hori = text("Horizontal Slider:", 300, 700);

  push();
  translate(1280, 270);
  rotate(radians(-90));
  let verti = text("Vertical Slider:", 0, 0);
  pop();

  text("Done designing Your City?", 300, 630);

  //image(img3, Xval, Yval, 100, 300);

  if (buildings.length > 0) {
    let newestBuilding = buildings[buildings.length - 1];
    newestBuilding.x = sliderX.value();
    newestBuilding.y = sliderY.value();
  }

  // GH: call the draw method on all buildings
  for (let i = 0; i < buildings.length; i++) {
    buildings[i].display();
  }
}
