class Bird {
  constructor(x, y, speed, gravity, birdImage) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.gravity = gravity;
    this.birdImage = birdImage;
    this.velocity = 0; // Initialize the vertical velocity to 0
    this.jumpStrength = -10; // Adjust this value for jump height
  }

  update() {
    // Apply gravity to the bird
    this.velocity += this.gravity;

    // Update the bird's position based on velocity
    this.y += this.velocity;

    // Keep the bird within the canvas bounds (adjust as needed)
    this.y = constrain(this.y, 0, height - this.birdImage.height);
  }

  jump() {
    // Make the bird jump by setting its velocity to the jump strength
    this.velocity = this.jumpStrength;
  }

  draw() {
    image(this.birdImage, this.x, this.y);
  }
}
