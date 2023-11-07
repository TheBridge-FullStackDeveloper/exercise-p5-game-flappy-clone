let myBird;
let birdImage;
let pipeImage;
let pipeImageTop;
let backgroundImage;
let width = 580;
let height = 660;
let score = 0;
let collisions = 0;
let gameOver = false;
let restartButton;

function preload() {
  birdImage = loadImage("./imgs/yellowbird-downflap.png");
  pipeImage = loadImage("./imgs/pipe-green.png");
  pipeImageTop = loadImage("./imgs/pipe-green top.png");
  backgroundImage = loadImage("./imgs/background-day.png");
}

function setup() {
  myBird = new Bird(
    50,
    100,
    3,
    0.5,
    birdImage,
    birdImage.width,
    birdImage.height
  );
  createCanvas(width, height);
  restartButton = createButton("Restart");
  restartButton.position(width / 2 - 50, height / 2);
  restartButton.hide();
  restartButton.mousePressed(startNewGame);
  pipes = [];
  pipesTop = [];
  const pipeSpacingX = 200;
  for (let x = 100; x < width; x += pipeSpacingX) {
    const randomY = Math.floor(Math.random() * 151) - 150;
    const verticalGap = 500;
    const pipeTop = new PipeTop(
      x,
      randomY,
      pipeImageTop,
      pipeImageTop.width,
      pipeImageTop.height
    );
    const pipe = new Pipe(
      x,
      randomY + verticalGap,
      pipeImage,
      pipeImage.width,
      pipeImage.height
    );
    pipesTop.push(pipeTop);
    pipes.push(pipe);
  }
}

function draw() {
  background(backgroundImage);
  if (!gameOver) {
    myBird.update();
    myBird.draw();
    const speed = 1;
    for (const pipe of pipes) {
      pipe.x -= speed;
      pipe.draw();
      if (pipe.x < 0) {
        resetPipe(pipe);
      }
      if (pipe.isColliding(myBird)) {
        console.log("Collision");
        collisions++;
      }
      if (myBird.x === pipe.x) {
        score++;
      }
    }

    for (const pipeTop of pipesTop) {
      pipeTop.x -= speed;
      pipeTop.draw();
      if (pipeTop.x < 0) {
        resetPipe(pipeTop);
      }
      if (pipeTop.isColliding(myBird)) {
        console.log("Collision");
        collisions++;
      }
    }

    //The game is over after getting more than 100 points in collisions.
    if (collisions > 100) {
      gameOver = true;
    }

    // Display the score on the canvas
    fill(255);
    textSize(40);
    text("Score: " + score, 200, 300);
    text("Collisions: " + collisions, 175, 350);
  } else {
    // Display the "Game Over" message when the game is over
    fill(255);
    textSize(40);
    text("Game Over", 200, 300);
    restartButton.show();
  }
}

function resetPipe(pipe) {
  pipe.x = width;
}

function keyPressed() {
  if (keyCode === 32 && !gameOver) {
    myBird.jump();
  }
}

function startNewGame() {
  score = 0;
  collisions = 0;
  gameOver = false;
  restartButton.hide();
  clear();
  pipes = [];
  pipesTop = [];
  const pipeSpacingX = 200;
  for (let x = 100; x < width; x += pipeSpacingX) {
    const randomY = Math.floor(Math.random() * 151) - 150;
    const verticalGap = 500;
    const pipeTop = new PipeTop(
      x,
      randomY,
      pipeImageTop,
      pipeImageTop.width,
      pipeImageTop.height
    );
    const pipe = new Pipe(
      x,
      randomY + verticalGap,
      pipeImage,
      pipeImage.width,
      pipeImage.height
    );
    pipesTop.push(pipeTop);
    pipes.push(pipe);
  }
}
