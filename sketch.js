let myBird;
let birdImage;
let pipeImage;
let pipeImageTop;
let backgroundImage;
let width = 400;
let height = 550;

function preload() {
  birdImage = loadImage("./imgs/yellowbird-downflap.png");
  pipeImage = loadImage("./imgs/pipe-green.png");
  pipeImageTop = loadImage("./imgs/pipe-green top.png");
  backgroundImage = loadImage("./imgs/background-day.png");
}

function setup() {
  myBird = new Bird(50, 100, 5, 0.5, birdImage);
  createCanvas(width, height);
  pipes = [];
  pipesTop = [];
  const pipeSpacingX = 100;
  for (let x = 100; x < width + pipeSpacingX; x += pipeSpacingX) {
    const pipe = new Pipe(x, 400, pipeImage, 50, 100);
    const pipeTop = new PipeTop(x, -50, pipeImageTop, 50, 100);
    pipes.push(pipe);
    pipesTop.push(pipeTop);
  }
}

function draw() {
  background(backgroundImage);
  // Update and draw the bird
  myBird.update();
  myBird.draw();
  // Define a speed to move everything to the left
  const speed = 2;
  // Update and draw the pipes from the array
  for (const pipe of pipes) {
    pipe.x -= speed;
    pipe.draw();
    // Check if a pipe is out of the canvas, and reset its x-coordinate
    if (pipe.x < 0) {
      resetPipe(pipe);
    }
  }
  for (const pipeTop of pipesTop) {
    pipeTop.x -= speed;
    pipeTop.draw();
    // Check if a pipe is out of the canvas, and reset its x-coordinate
    if (pipeTop.x < 0) {
      resetPipe(pipeTop);
    }
  }
}

function resetPipe(pipe) {
  pipe.x = width;
}

function resetPipe(pipeTop) {
  pipeTop.x = width;
}

function keyPressed() {
  if (keyCode === 32) {
    myBird.jump();
  }
}
