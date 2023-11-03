let bird;
let pipes = [];
let score = 0;
let minPipeHeight = 50;
let bgImagen;
let birdImagen;
let pipeImagen;

function preload() {
  bgImagen = loadImage('background-day.png');
  birdImagen = loadImage('redbird-upflap.png');
  pipeImagen = loadImage('pipe-green.png');
}

function setup() {
  createCanvas(400, 600);
  bird = new Bird(birdImagen);
  pipes.push(new Pipe(pipeImagen));
  bgImagen.width = width;
  bgImagen.height = height;
  bgImagePos = 0;
}

function draw() {

  image(bgImagen, 0, 0, width, height, bgImagePos, 0, bgImagen.width, bgImagen.height);
  bgImagePos = (bgImagePos + 2) % bgImagen.width;

  bird.update();
  bird.show();

  if (frameCount % 100 === 0) {
    pipes.push(new Pipe(pipeImagen));
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
