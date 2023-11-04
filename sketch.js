let myBird;
let birdImage;
let pipeImage;
let pipeImageTop;
let backgroundImage;
let width = 580;
let height = 660;
let score = 0;
let collisions = 0;

function preload() {
  birdImage = loadImage("./imgs/yellowbird-downflap.png");
  pipeImage = loadImage("./imgs/pipe-green.png");
  pipeImageTop = loadImage("./imgs/pipe-green top.png");
  backgroundImage = loadImage("./imgs/background-day.png");
}

function setup() {
  myBird = new Bird(50, 100, 1, 0.5, birdImage, 34, 24);
  createCanvas(width, height); // Set your canvas width and height
  pipes = [];
  pipesTop = [];
  const pipeSpacingX = 200;
  for (let x = 100; x < width; x += pipeSpacingX) {
    const randomY = Math.floor(Math.random() * 151) - 150;
    const verticalGap = 500; // Adjust the vertical gap between top and bottom pipes
    const pipeTop = new PipeTop(x, randomY, pipeImageTop, 52, 320);
    const pipe = new Pipe(x, randomY + verticalGap, pipeImage, 52, 320);
    pipesTop.push(pipeTop);
    pipes.push(pipe);
  }
}

function draw() {
  background(backgroundImage);
  myBird.update();
  myBird.draw();
  const speed = 1;

  for (const pipe of pipes) {
    pipe.x -= speed;
    pipe.draw();
    // Check if a pipe is out of the canvas, and reset its x-coordinate
    if (pipe.x < 0) {
      resetPipe(pipe);
    }
    // Check for collisions with the bird
    if (pipe.isColliding(myBird)) {
      console.log("Collision");
      collisions++;
    }
    // Check if the bird passed a pipe
    if (myBird.x === pipe.x) {
      //pipe.passed = true; // Mark the pipe as passed
      score++; // Increment the score
    }

    if (collisions > 100) {
      console.log("game over");
    }
  }

  for (const pipeTop of pipesTop) {
    pipeTop.x -= speed;
    pipeTop.draw();
    // Check if a pipe is out of the canvas, and reset its x-coordinate
    if (pipeTop.x < 0) {
      resetPipe(pipeTop);
    }
    // Check for collisions with the bird
    if (pipeTop.isColliding(myBird)) {
      console.log("Collision");
    }
  }

  // Display the score on the canvas
  fill(255); // Set text color to white
  textSize(40); // Set the text size
  text("Score: " + score, 200, 300);
  text("Collisions: " + collisions, 175, 350);
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
