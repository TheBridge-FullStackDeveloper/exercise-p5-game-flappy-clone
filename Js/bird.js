class Bird {
    constructor() {
        this.birdX = 120;
        this.birdY = 150;
        this.speed = 0;
        this.gravityValue = 0.2;
        this.birdMid = birdMid;
    }

    draw() {
        image(this.birdMid, this.birdX, this.birdY);
    }

    moveUp() {
        this.speed = -4;
        this.birdY += this.speed;
    }
    

    gravity() {
        this.speed += this.gravityValue;
        this.birdY += this.speed;
      }   
    
    }

    function keyPressed() {
        if (keyCode === 32) {
            bird.moveUp();
        }
    }
     