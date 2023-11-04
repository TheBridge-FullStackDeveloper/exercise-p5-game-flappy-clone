class PipeTop {
  constructor(x, y, pipeImageTop, w, h) {
    this.x = x;
    this.y = y;
    this.pipeImageTop = pipeImageTop;
    this.w = w;
    this.h = h;
  }

  isColliding(object) {
    return (
      this.x < object.x + object.w &&
      this.x + this.w > object.x &&
      this.y < object.y + object.w &&
      this.y + this.w > object.y
    );
  }

  draw() {
    image(this.pipeImageTop, this.x, this.y, this.w, this.h);
  }
}
