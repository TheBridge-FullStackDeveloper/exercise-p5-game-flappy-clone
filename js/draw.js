let backgroundImg;
let bird;

function preload() {
  midFlap = loadImage("./assets/sprites/yellowbird-midflap.png");
  downFlap = loadImage("./assets/sprites/yellowbird-downflap.png");
  upFlap = loadImage("./assets/sprites/yellowbird-upflap.png");
}
function setup() {
  backgroundImg = loadImage("./assets/sprites/background-day.png");
  createCanvas(384, 512);
  bird = new Bird(182, 256, 0, 0, midFlap, downFlap, upFlap);
}

function draw() {
  background(backgroundImg);
  bird.draw();
}
