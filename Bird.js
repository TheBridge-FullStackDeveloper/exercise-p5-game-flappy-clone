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

  isColliding(object) {
    return (
      this.x < object.x + object.w &&
      this.x + this.w > object.x &&
      this.y < object.y + object.w &&
      this.y + this.w > object.y
    );
  }

  update() {
    this.velocity += this.gravity; // Apply gravity to the bird
    this.y += this.velocity; // Update the bird's position based on velocity
    this.y = constrain(this.y, 0, height - this.birdImage.height); // Keep the bird within the canvas bounds (adjust as needed)
    // Check for collisions
    //if (this.isColliding(pipe)) {
      console.log("Collision with pipe");
    //}
  }

  jump() {
    // Make the bird jump by setting its velocity to the jump strength
    this.velocity = this.jumpStrength;
  }

  draw() {
    image(this.birdImage, this.x, this.y);
  }
}
