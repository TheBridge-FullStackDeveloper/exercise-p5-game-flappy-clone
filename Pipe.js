class Pipe {
  constructor(x, y, pipeImage, w, h) {
    this.x = x;
    this.y = y;
    this.pipeImage = pipeImage;
    this.w = w;
    this.h = h;
    //this.passed = false; // Initialize to false
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
    image(this.pipeImage, this.x, this.y, this.w, this.h);
  }
}
