class Pipe {
  constructor(x, y, pipeImage, w, h) {
    this.x = x;
    this.y = y;
    this.pipeImage = pipeImage;
    this.w = w;
    this.h = h;
  }

  draw() {
    image(this.pipeImage, this.x, this.y);
  }
}
