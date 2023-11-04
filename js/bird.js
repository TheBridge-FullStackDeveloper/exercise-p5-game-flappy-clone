class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.3;
    this.fly = -12;
    this.speedY = 0;
    this.midFlap = midFlap;
    this.downFlap = downFlap;
    this.upFlap = upFlap;
    this.currentImg = this.midFlap;
    this.flapCount = 0;
  }

  draw() {
    image(this.currentImg, this.x, this.y, 32, 32);
  }

  up() {
    this.speedY += this.fly;
  }

  update() {
    this.speedY += this.gravity;
    this.y += this.speedY;

    if (this.y > height - groundImg.height - 32) {
      this.y = height - groundImg.height - 32;
      this.speedY = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.speedY = 0;
    }

    this.flapCount++;
    if (this.flapCount >= 20 && this.flapCount < 40) {
      this.currentImg = this.upFlap;
    } else if (this.flapCount >= 40 && this.flapCount < 60) {
      this.currentImg = this.midFlap;
    } else if (this.flapCount >= 60 && this.flapCount < 80) {
      this.currentImg = this.downFlap;
    } else if (this.flapCount >= 80) {
      this.currentImg = this.midFlap;
      this.flapCount = 0;
    }
  }
}
