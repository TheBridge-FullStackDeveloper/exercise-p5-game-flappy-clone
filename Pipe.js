class Pipe {
  constructor(x, y, pipeImage, w, h) {
    this.x = x;
    this.y = y;
    this.pipeImage = pipeImage;
    this.w = w;
    this.h = h;
  }

  isColliding(object) {
    return (
      this.x < object.x + object.w &&
      this.x + this.w > object.x &&
      this.y < object.y + object.h &&
      this.y + this.h > object.y
    );
  }

  draw() {
    image(this.pipeImage, this.x, this.y);
  }
}
