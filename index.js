let bird;
let pipes = [];
let score = 0;
let minPipeHeight = 50;
let bgImage;
let bgImagePos = 0;
let birdImage;
let pipeImageBot;
let pipeImageTop;

function preload() {
  bgImage = loadImage('./assets/background-day.png');
  birdImage = loadImage('./assets/redbird-upflap.png');
  pipeImageBot = loadImage('./assets/pipe-green.png');
  pipeImageTop = loadImage('./assets/pipe-green-top.png');
}

function setup() {
  createCanvas(350, 600);
  bird = new Bird(birdImage);
  pipes.push(new Pipe(pipeImageBot, pipeImageTop));
  bgImage.width = width;
  bgImage.height = height;
  bgImagePos = 0;
}

function draw() {
  // Background
  image(bgImage, 0, 0, width, height, bgImagePos, 0, bgImage.width, bgImage.height);

  bird.update();
  bird.show();

  if (frameCount % 100 === 0) {
    pipes.push(new Pipe(pipeImageBot, pipeImageTop));
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log('Game over');
      noLoop();
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
      score++;
    }
  }

  fill(0);
  textSize(32);
  text(`Score: ${score}`, 10, 30);
}

function keyPressed() {
  if (key === ' ') {
    bird.up();
  }
}

function mousePressed() {
    bird.up();
}
