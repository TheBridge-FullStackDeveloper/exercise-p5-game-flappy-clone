let backgroundImg;
let bird;
let ground;
const pipes = [];
let numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight, numberNine, numberZero;
let score = 0;

function preload() {
  midFlap = loadImage("./assets/sprites/yellowbird-midflap.png");
  downFlap = loadImage("./assets/sprites/yellowbird-downflap.png");
  upFlap = loadImage("./assets/sprites/yellowbird-upflap.png");
  backgroundImg = loadImage("./assets/sprites/background-day.png");
  groundImg = loadImage("./assets/sprites/base.png");
  pipeGreenImg = loadImage("./assets/sprites/pipe-green.png");
  pipeGreenTopImg = loadImage("./assets/sprites/pipe-green-top.png");
  gameOver = loadImage("./assets/sprites/gameover.png");
  numberOne = loadImage("./assets/sprites/1.png");
  numberTwo = loadImage("./assets/sprites/2.png");
  numberThree = loadImage("./assets/sprites/3.png");
  numberFour = loadImage("./assets/sprites/4.png");
  numberFive = loadImage("./assets/sprites/5.png");
  numberSix = loadImage("./assets/sprites/6.png");
  numberSeven = loadImage("./assets/sprites/7.png");
  numberEight = loadImage("./assets/sprites/8.png");
  numberNine = loadImage("./assets/sprites/9.png");
  numberZero = loadImage("./assets/sprites/0.png");
}

function setup() {
  createCanvas(384, 512);
  bird = new Bird();
  pipes.push(new Pipe());
  scoreDisplay = new ScoreDisplay();
}

function draw() {
  background(backgroundImg);

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].draw();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      image(gameOver,(width-gameOver.width)/2, (height-gameOver.height)/2)
      console.log("GAME OVER");
      noLoop();
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
    if (!pipes[i].passed && pipes[i].x + pipes[i].w < bird.x) {
      pipes[i].passed = true;
      scoreDisplay.increaseScore();
    }
  }

  bird.update();
  bird.draw();

  if (frameCount % 75 === 0) {
    pipes.push(new Pipe());
  }
  groundMoving();
  scoreDisplay.draw()
}

function keyPressed() {
  if (key === " ") {
    bird.up();
  }
}
