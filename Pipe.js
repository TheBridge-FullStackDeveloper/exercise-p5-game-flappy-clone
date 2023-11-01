class Pipe {
  constructor(x, y, gapX, gapY, pipeImage) {
    this.x = x;
    this.y = y;
    this.gapX = gapX;
    this.gapY = gapY;
    this.pipeImage = pipeImage;
  }

  draw() {
    image(this.pipeImage, this.x, this.y);
  }
}
