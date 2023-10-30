class Bird {
  constructor(x, y, speedX, speedY, midFlap, downFlap, upFlap) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.midFlap = midFlap;
    this.downFlap = downFlap;
    this.upFlap = upFlap;
    this.currentImg = this.midFlap;
  }

  draw() {
    image(this.currentImg, this.x, this.y);
  }
}
