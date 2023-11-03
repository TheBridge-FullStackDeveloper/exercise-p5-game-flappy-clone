class Bird {
  constructor(img) {
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
    this.img = img;
  }

  show() {
    image(this.img, this.x, this.y, this.img.width, this.img.height);
  }

  up() {
    this.velocity += this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

class Pipe {
  constructor(img) {
    this.top = random(height / 2.5);
    this.bottom = random(height / 2.5);
    this.x = width;
    this.w = 50;
    this.speed = 2;
    this.img = img;
  }

  pass(bird) {
    if (this.x + this.w < bird.x) {
      return true; // La tubería ha pasado al pájaro
    } else {
      return false;
    }
  }
  show() {
    image(this.img, this.x, 0, this.w, this.top,);
    image(this.img, this.x, height - this.bottom, this.w, this.bottom);
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    return this.x < -this.w;
  }

  hits(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        return true;
      }
    }
    return false;
  }
}
