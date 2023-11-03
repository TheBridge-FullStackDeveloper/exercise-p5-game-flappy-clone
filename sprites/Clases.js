class Bird {
    constructor() {
      this.y = height / 2;
      this.x = 64;
      this.gravity = 0.6;
      this.lift = -15;
      this.velocity = 0;
    }
  
    show() {
      fill(255);
      ellipse(this.x, this.y, 32, 32);
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
    constructor() {
      this.top = random(height / 2);
      this.bottom = random(height / 2);
      this.x = width;
      this.w = 20;
      this.speed = 2;
    }
  
    show() {
      fill(0, 200, 0);
      rect(this.x, 0, this.w, this.top);
      rect(this.x, height - this.bottom, this.w, this.bottom);
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
  