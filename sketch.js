let myBird;
let birdImage;
let pipeImage;
let backgroundImage;

function preload() {
  birdImage = loadImage("./yellowbird-downflap.png");
  pipeImage = loadImage("./pipe-green.png");
  backgroundImage = loadImage("./background-day.png");
}

function setup() {
  myBird = new Bird(50, 100, 5, 0.5, birdImage);
  firstLowerPipe = new Pipe(100, 500, 5, 5, pipeImage);
  secondLowerPipe = new Pipe(200, 600, 5, 5, pipeImage);
  thirdLowerPipe = new Pipe(300, 700, 5, 5, pipeImage);
  firstUpperPipe = new Pipe(100, 0, 5, 5, pipeImage);
  secondUpperPipe = new Pipe(200, 0, 5, 5, pipeImage);
  thirdUpperPipe = new Pipe(300, 0, 5, 5, pipeImage);
  createCanvas(500, 800);
}

function draw() {
  background(backgroundImage);

  // Update and draw the bird
  myBird.update();
  myBird.draw();

  // Define a speed to move everything to the left
  const speed = 1;

  // Update and draw the pipes
  const pipes = [
    firstLowerPipe,
    secondLowerPipe,
    thirdLowerPipe,
    firstUpperPipe,
    secondUpperPipe,
    thirdUpperPipe,
  ];
  for (const pipe of pipes) {
    pipe.x -= speed;
    pipe.draw();

    // Check if a pipe is out of the canvas, and reset its x-coordinate
    if (pipe.x < 0) {
      console.log("out of map");
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    myBird.jump();
  }
}
