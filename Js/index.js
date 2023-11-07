let img;
let birdMid;
let birdDown;
let birdUp;
let baseGame;
let baseGameX = 0;
let bird;
let pipeRedInf;
let pipe;
let pipeRedSup;
let pipes = [];



function preload() {
  img = loadImage("sprites/background-night.png");
  birdMid = loadImage("sprites/bluebird-midflap.png");
  baseGame = loadImage("sprites/base.png");
  pipeRedInf = loadImage("sprites/pipe-red.png");
  pipeRedSup = loadImage("sprites/pipe-red-copia.png")
}

function setup() {
  let cnv = createCanvas(288, 512);
  cnv.position(600, 50)
  bird = new Bird();
  pipe = new Pipe();
}


function draw() {
  image(img, 0, 0);
  bird.draw();
  bird.gravity();
  
  
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].draw();
    pipes[i].update();

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }
  moverBase();
}


