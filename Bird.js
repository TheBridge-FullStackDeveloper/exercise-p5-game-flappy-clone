class Bird {
  constructor(x, y, speed, gravity, birdImage, w, h) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.gravity = gravity;
    this.birdImage = birdImage;
    this.velocity = 0; // Initialize the vertical velocity to 0
    this.jumpStrength = -7 ; // Adjust this value for jump height
    this.w = w;
    this.h = h; 
  }

  update() {
    this.velocity += this.gravity; // Apply gravity to the bird
    this.y += this.velocity; // Update the bird's position based on velocity
    this.y = constrain(this.y, 0, height - this.birdImage.height); // Keep the bird within the canvas bounds (adjust as needed)
    // Check for collisions
  }

  jump() {
    // Make the bird jump by setting its velocity to the jump strength
    this.velocity = this.jumpStrength;
  }

  draw() {
    image(this.birdImage, this.x, this.y);
  }
}

