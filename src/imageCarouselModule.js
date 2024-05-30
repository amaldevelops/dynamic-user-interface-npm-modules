// This Node module will allow you to use Image Carousels

export class imageCarousel {
  constructor() {
    this.imageDiv1 = document.querySelector(".imageCarouselImagesDiv");
    this.imageDiv2 = document.querySelector(".imageCarouselImagesDiv");
    this.imageDiv3 = document.querySelector(".imageCarouselImagesDiv");
  }

  userInput() {
    const leftButton = document.querySelector(".arrowButtonLeft");
    const rightButton = document.querySelector(".arrowButtonRight");
    const leftCircleButton = document.querySelector(".leftCircle");
    const middleCircleButton = document.querySelector(".middleCircle");
    const rightCircleButton = document.querySelector(".rightCircle");

    // Left button
    leftButton.addEventListener("click", () => {
      this.moveLeft();
    });

    //Right Button
    rightButton.addEventListener("click", () => {
      this.moveRight();
    });

    // 1st Circle Button

    leftCircleButton.addEventListener("click", () => {
      this.circleButton1Clicked();
    });

    // 2nd Circle Button

    middleCircleButton.addEventListener("click", () => {
      this.circleButton2Clicked();
    });

    // 3rd Circle Button
    rightCircleButton.addEventListener("click", () => {
      this.circleButton3Clicked();
    });
  }

  moveLeft() {
    this.imageDiv1.style.gridRowStart = 1;
    this.imageDiv1.style.gridRowEnd = 4;
    this.imageDiv1.style.gridColumnStart = 2;
    this.imageDiv1.style.gridColumnEnd = 4;
  }

  moveRight() {
    this.imageDiv2.style.gridRowStart = 1;
    this.imageDiv2.style.gridRowEnd = 2;
    this.imageDiv2.style.gridColumnStart = 1;
    this.imageDiv2.style.gridColumnEnd = 2;
  }

  circleButton1Clicked() {
    this.imageDiv1.style.gridRowStart = 1;
    this.imageDiv1.style.gridRowEnd = 4;
    this.imageDiv1.style.gridColumnStart = 2;
    this.imageDiv1.style.gridColumnEnd = 4;
  }

  circleButton2Clicked() {
    this.imageDiv2.style.gridRowStart = 1;
    this.imageDiv2.style.gridRowEnd = 4;
    this.imageDiv2.style.gridColumnStart = 2;
    this.imageDiv2.style.gridColumnEnd = 4;
  }

  circleButton3Clicked() {
    this.imageDiv3.style.gridRowStart = 1;
    this.imageDiv3.style.gridRowEnd = 4;
    this.imageDiv3.style.gridColumnStart = 2;
    this.imageDiv3.style.gridColumnEnd = 4;
  }
}
