class Pipe {
  constructor() {
    this.space = 175;
    this.top = random(10, 200);
    this.bottom = height - (this.top + this.space);
    this.x = width;
    this.w = 80;
    this.speed = 3;
    this.collision = false;
    this.greenPipe = pipeGreenImg;
    this.greenPipeTop = pipeGreenTopImg;
    this.passed = false;
  }

  hits(bird) {
    if (bird.y + 32 < this.top || bird.y + 32 > height - this.bottom) {
      if (bird.x + 32 > this.x && bird.x + 32 < this.x + this.w) {
        this.collision = true;
        return true;
      }
    }
    this.collision = false;
    return false;
  }

  draw() {
    image(this.greenPipeTop, this.x, 0, this.w, this.top);
    image(this.greenPipe, this.x, height - this.bottom, this.w, this.bottom);
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    return this.x < -this.w;
  }
}
