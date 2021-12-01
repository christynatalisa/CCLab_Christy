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
  createCanvas(700, 700);

  sliderX = createSlider(0, 255, 0, 1);
  sliderX.position(500, 600);
  sliderX.style("width", "500 px");

  sliderY = createSlider(0, 255, 0, 1);
  sliderY.position(560, 490);
  sliderY.style("transform", "rotate(90deg)");
  sliderY.id('sliderY');

  buttonP = createButton("petronas");
  buttonP.position(30, 30);
  buttonP.mousePressed(towerImgA);

  buttonB = createButton("burj khalifa");
  buttonB.position(110, 30);
  buttonB.mousePressed(towerImgB);

  buttonB = createButton("gran torre");
  buttonB.position(200, 30);
  buttonB.mousePressed(towerImgC);

  buttonB = createButton("chrysler");
  buttonB.position(290, 30);
  buttonB.mousePressed(towerImgD);

  buttonB = createButton("burj khalifa");
  buttonB.position(380, 30);
  buttonB.mousePressed(towerImgE);

  buttonB = createButton("Save Here");
  buttonB.position(80, 600);
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
  constructor(img, x, y) {
    // GH: every building object stores the image it will show
    this.img = img;
    this.size = 20;
    this.color = color(255, 0, 0);
    this.x = x;
    this.y = y;
  }

  display() {
    // GH: added
    image(this.img, this.x, this.y, 100, 300);
  }

  move() {}
}

function towerImgA() {
  let petronasBuilding = new Building(imgs[0], 50, 300);
  buildings.push(petronasBuilding);
  /*
  console.log('yay');
  let Xval = sliderX.value();
  let Yval = sliderY.value();
  //image(img1, Xval, Yval, 100, 300);
  */
}

function towerImgB() {
  let burjBuilding = new Building(imgs[1], 50, 300);
  buildings.push(burjBuilding);
  // let Xval = sliderX.value();
  // let Yval = sliderY.value();
  // //image(img2, Xval, Yval, 100, 300);
}

function towerImgC() {
  let granBuilding = new Building(imgs[2], 30, 200);
  buildings.push(granBuilding);
}

function towerImgD() {
  let chryBuilding = new Building(imgs[3], 200, 300);
  buildings.push(chryBuilding);
}
function towerImgE() {
  let burjBuilding = new Building(imgs[4], 50, 300);
  buildings.push(burjBuilding);
}

function saveCity() {
}

function draw() {
  background(0);

  noStroke();
  fill(92, 115, 120);
  rect(70, 200, 500, 300, 10, 10);
  image(logo, 424, 104, 150, 150);
  fill('White');

  text("Horizontal Slider:", 500, 580);
  text("Vertical Slider:", 590, 420);

    text("Done designing Your City?", 80, 580);



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
