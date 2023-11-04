let groundImgX = 0;
function groundMoving() {
  groundImgX -= 1.2;
  if (groundImgX < -groundImg.width) {
    groundImgX = 0;
  }

  image(groundImg, groundImgX, height - groundImg.height);
  image(groundImg, groundImgX + groundImg.width, height - groundImg.height);
  image(groundImg, groundImgX + groundImg.width * 2, height - groundImg.height);
}
