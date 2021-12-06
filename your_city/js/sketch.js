let sliderX;
let sliderY;
let sliderSize;

let button;
let frame = false;
let tutorial = false;

let rectfill = (92, 115, 120);
let night = false;
let day = false;

let stars = []

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
  imgs.push(loadImage("assets/7.png"));
  imgs.push(loadImage("assets/8.png"));
  imgs.push(loadImage("assets/9.png"));

  logo = loadImage("assets/yourcity.png");
  spotlight = loadImage("assets/spotlight.png");
  crowd = loadImage("assets/crowd.png");

  cloud1 = loadImage("assets/cloud1.png");
  cloud2 = loadImage("assets/cloud2.png");
  cloud3 = loadImage("assets/cloud3.png");
  cloud4 = loadImage("assets/cloud4.png");

  sizetut = loadImage("assets/sizetut.png");
  loctut = loadImage("assets/loctut.png");

  click = loadSound('sounds/click.mp3');
  music = loadSound('sounds/song.mp3');
}

function setup() {
  createCanvas(1400, 800);

  checkbox = createCheckbox('Tutorial', false);
  checkbox.changed(tutorialfunc);
  checkbox.position(130, 120);
  checkbox.style('color', 'White');
  checkbox.id("checkmark");

  sliderX = createSlider(0, 1300, 200, 1);
  sliderX.position(550, 690);
  sliderX.style("width", "500 px");
  sliderX.id("sliderX");

  sliderY = createSlider(0, 700, 200, 1);
  sliderY.position(1000, 470);
  sliderY.style("transform", "rotate(90deg)");
  sliderY.id("sliderY");

  sliderSize = createSlider(0, 2, 1, 0.05);
  sliderSize.position(120, 570);
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

  buttonD = createButton("cloud gate");
  buttonD.position(595, 90);
  buttonD.id("cloudgate");
  buttonD.mousePressed(towerImgD);

  buttonE = createButton("taj mahal");
  buttonE.position(710, 90);
  buttonE.id("taj");
  buttonE.mousePressed(towerImgE);

  buttonF = createButton("space needle");
  buttonF.position(815, 90);
  buttonF.id("space");
  buttonF.mousePressed(towerImgF);

  buttonG = createButton("Save Here");
  buttonG.position(700, 770);
  buttonG.id("save");
  buttonG.mousePressed(saveCity);

  buttonJ = createButton("pearl tower");
  buttonJ.position(250, 145);
  buttonJ.id("pearl");
  buttonJ.mousePressed(towerImgJ);

  buttonK = createButton("merlion");
  buttonK.position(370, 145);
  buttonK.id("merl");
  buttonK.mousePressed(towerImgK);

  buttonL = createButton("st basil");
  buttonL.position(470, 145);
  buttonL.id("basil");
  buttonL.mousePressed(towerImgL);

  buttonH = createButton("Night Time");
  buttonH.position(120, 310);
  buttonH.id("night");
  buttonH.mousePressed(nightime);

  buttonI = createButton("Day Time");
  buttonI.position(120, 390);
  buttonI.id("day");
  buttonI.mousePressed(daytime);

  buttonM = createButton("🎵");
  buttonM.position(140, 190);
  buttonM.id("music");
  buttonM.mousePressed(music);

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
  let pisaBuilding = new Building(imgs[2], 30, 200, 260, 300);
  buildings.push(pisaBuilding);
}

function towerImgD() {
  click.play();
  let cloudgateBuilding = new Building(imgs[3], 200, 300, 300, 280);
  buildings.push(cloudgateBuilding);
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

function towerImgJ() {
  click.play();
  let pearlBuilding = new Building(imgs[6], 150, 300, 210, 380);
  buildings.push(pearlBuilding);
}

function towerImgK() {
  click.play();
  let merlBuilding = new Building(imgs[7], 150, 300, 280, 300);
  buildings.push(merlBuilding);
}

function towerImgL() {
  click.play();
  let basilBuilding = new Building(imgs[8], 150, 300, 250, 300);
  buildings.push(basilBuilding);
}

function nightime() {
  click.play();
  rectfill = '#03082C';
  day = false;
  night = true;

}

function daytime() {
  click.play();
  night = false;
  day = true;
  rectfill = '#6FAFC6';
}

function music() {
  click.play();
  //song.play();
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
  let cloudBtn = document.getElementById("cloudgate");
  cloudBtn.style.display = "none";
  let tajBtn = document.getElementById("taj");
  tajBtn.style.display = "none";
  let spaceBtn = document.getElementById("space");
  spaceBtn.style.display = "none";
  let saveBtn = document.getElementById("save");
  saveBtn.style.display = "none";
  let pearlBtn = document.getElementById("pearl");
  pearlBtn.style.display = "none";
  let merlBtn = document.getElementById("merl");
  merlBtn.style.display = "none";
  let basilBtn = document.getElementById("basil");
  basilBtn.style.display = "none";

  let slideX = document.getElementById("sliderX");
  slideX.style.display = "none";
  let slideY = document.getElementById("sliderY");
  slideY.style.display = "none";
  let slideSize = document.getElementById("sliderSize");
  slideSize.style.display = "none";

  let nighttime = document.getElementById("night");
  nighttime.style.display = "none";
  let daytime = document.getElementById("day");
  daytime.style.display = "none";
  let checkboxx = document.getElementById("checkmark");
  checkboxx.style.display = "none";
  let musicbt = document.getElementById("music");
  musicbt.style.display = "none";
}

function draw() {
  clear();
  background(0);

  noStroke();
  fill(rectfill);
  rect(240, 180, 1000, 450, 10, 10);
  //tint(255, 128 + 128 * sin(millis() / 1000));

  if (frame == false) {

    image(logo, 1050, 67, 180, 180);
    fill(255);
    text("Horizontal Slider:", 300, 670);

    push();
    translate(1280, 270);
    rotate(radians(-90));
    text("Vertical Slider:", 0, 0);
    pop();

    push();
    translate(180, 690);
    rotate(radians(-90));
    sizetext = text("Size Slider:", 0, 0);
    pop();

    text("Design Your City, select buildings here: ", 250, 50);

    text("Done designing Your City?", 680, 720);

    if (tutorial == true) {
      image(sizetut, 20, 570, 180, 180);
      image(loctut, 1070, 620, 200, 200);
    }
  }

  if (frame == true) {
    framefunction();
    image(spotlight, 300, 10, 300, 600);
    image(spotlight, 600, 10, 300, 600);
    image(spotlight, 900, 10, 300, 600);
    image(crowd, 100, 150, 1400, 700);
  }

  if (day == true) {
    image(cloud1, 900, 300, 250, 100);
    image(cloud2, 700, 200, 300, 200);
    image(cloud3, 300, 200, 300, 200);
    image(cloud4, 500, 300, 300, 160);
}

  if (night == true) {
    for (i = 0; i < 500; i++){

  		let star = {
  			x:random(240,1240),
  			y:random(180,630)
  		};
  		stars.push(star);
  	}
   for (i = 0; i < 500; i++){
		let x = stars[i].x;
		let y = stars[i].y;
		fill(255);
		ellipse(x,y,random(1,3),random(1,3));
	 }
  }

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
}
