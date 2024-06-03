// This Node module will allow you to use Image Carousels
// Amal Kariyawasam, 2024

export class imageCarousel {
  constructor() {
    this.imageDiv1 = document.querySelector(".imageDiv1");
    this.imageDiv2 = document.querySelector(".imageDiv2");
    this.imageDiv3 = document.querySelector(".imageDiv3");
    this.leftCircleButton = document.querySelector(".leftCircle");
    this.middleCircleButton = document.querySelector(".middleCircle");
    this.rightCircleButton = document.querySelector(".rightCircle");
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
    // this.imageDiv1.style["grid-area"] = "2/1/3/2";
    this.circleButton1Clicked();
  }

  moveRight() {
    // this.imageDiv2.style["grid-area"] = "2/2/3/3";
    this.circleButton3Clicked();
  }

  circleButton1Clicked() {
    this.imageDiv1.style["grid-area"] = "2/1/3/2";
    this.imageDiv2.style["grid-area"] = "2/2/3/3";
    this.imageDiv3.style["grid-area"] = "2/3/3/4";

    this.leftCircleButton.style.backgroundColor = "red";
    this.middleCircleButton.style.backgroundColor = "";
    this.rightCircleButton.style.backgroundColor = "";
  }

  circleButton2Clicked() {
    this.imageDiv1.style["grid-area"] = "2/2/3/3";
    this.imageDiv2.style["grid-area"] = "2/1/3/2";
    this.imageDiv3.style["grid-area"] = "2/3/3/4";

    this.leftCircleButton.style.backgroundColor = "";
    this.middleCircleButton.style.backgroundColor = "red";
    this.rightCircleButton.style.backgroundColor = "";
  }

  circleButton3Clicked() {
    this.imageDiv1.style["grid-area"] = "2/3/3/4";
    this.imageDiv2.style["grid-area"] = "2/2/3/3";
    this.imageDiv3.style["grid-area"] = "2/1/3/2";

    this.leftCircleButton.style.backgroundColor = "";
    this.middleCircleButton.style.backgroundColor = "";
    this.rightCircleButton.style.backgroundColor = "red";
  }

  carouselAnimationRepeat() {
    setInterval(() => {
      this.animateCarousel();
    }, 20000);
  }

  animateCarousel() {
    setTimeout(() => {
      this.circleButton1Clicked();
    }, 5000);
    setTimeout(() => {
      this.circleButton2Clicked();
    }, 10000);
    setTimeout(() => {
      this.circleButton3Clicked();
    }, 15000);
  }
}
