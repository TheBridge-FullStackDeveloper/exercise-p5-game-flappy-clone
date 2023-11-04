class ScoreDisplay {
  constructor() {
    this.score = 0;
    this.scoreWidth = 20;
    this.scoreHeight = 30;
    this.x = (width - this.scoreWidth) / 2;
    this.y = 10;
  }

  increaseScore() {
    this.score++;
  }

  draw() {
    let scoreString = this.score.toString();
    let x = this.x;

    for (let i = 0; i < scoreString.length; i++) {
      let number = int(scoreString.charAt(i));

      switch (number) {
        case 0:
          image(numberZero, x, this.y, this.scoreWidth, this.scoreHeight);
          break;
        case 1:
          image(numberOne, x, this.y, this.scoreWidth, this.scoreHeight);
          break;
        case 2:
          image(numberTwo, x, this.y, this.scoreWidth, this.scoreHeight);
          break;
        case 3:
          image(numberThree, x, this.y, this.scoreWidth, this.scoreHeight);
          break;
        case 4:
          image(numberFour, x, this.y, this.scoreWidth, this.scoreHeight);
          break;
        case 5:
          image(numberFive, x, this.y, this.scoreWidth, this.scoreHeight);
          break;
        case 6:
          image(numberSix, x, this.y, this.scoreWidth, this.scoreHeight);
          break;
        case 7:
          image(numberSeven, x, this.y, this.scoreWidth, this.scoreHeight);
          break;
        case 8:
          image(numberEight, x, this.y, this.scoreWidth, this.scoreHeight);
          break;
        case 9:
          image(numberNine, x, this.y, this.scoreWidth, this.scoreHeight);
          break;
      }

      x += this.scoreWidth;
    }
  }
}
