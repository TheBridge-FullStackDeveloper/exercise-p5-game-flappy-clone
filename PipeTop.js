class PipeTop {
  constructor(x, y, pipeImageTop, w, h) {
    this.x = x;
    this.y = y;
    this.pipeImageTop = pipeImageTop;
    this.w = w;
    this.h = h;
  }

  draw() {
    image(this.pipeImageTop, this.x, this.y);
  }
}
