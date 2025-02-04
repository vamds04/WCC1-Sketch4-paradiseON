class Photo {
  constructor(file, title) {
    this.img = loadImage(file);
    this.title = title;

    // Position where the photo randomly appears when run the code
    this.x = random(width);
    this.y = random(height);
    this.scale = 1;  //Scale of image display at the beginning

    /* targetX and targetY are used to confirm the position of 
    the image after the move, and also to achieve the effect of 
    smooth movement of the image (used later in lerp() to achieve this) */
    this.targetX = this.x;
    this.targetY = this.y;
    this.targetScale = this.scale;   ////Scale of image display 
  }

  display() {
    if (this.img) {
      // smooth movement of images with the lerp() function
      this.x = lerp(this.x, this.targetX, 0.06);
      this.y = lerp(this.y, this.targetY, 0.06);
      this.scale = lerp(this.scale, this.targetScale, 0.27);

      // define the width and height of the photo display based on a random scale
      let imgWidth = this.img.width * this.scale;
      let imgHeight = this.img.height * this.scale;

      // show the image
      image(this.img, this.x, this.y, imgWidth, imgHeight);

      // show image description stored in json file
      fill(255);
      textSize(12);
      text(this.title, this.x, this.y - 10);
    }
  }

  randomize() {
    /* This section is used to re-randomise 
    where the photos appear when the mouse is clicked */
    this.targetX = random(width)-width*0.2;
    this.targetY = random(height)-height*0.2;
    this.targetScale = random(0.4, 0.8);
  }
}