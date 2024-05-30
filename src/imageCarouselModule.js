// This Node module will allow you to use Image Carousels

export class imageCarousel {
  constructor() {}

  userInput() {
    const leftButton = document.querySelector(".arrowButtonLeft");
    const rightButton = document.querySelector(".arrowButtonRight");
    const leftCircleButton = document.querySelector(".leftCircle");
    const middleCircleButton = document.querySelector(".middleCircle");
    const rightCircleButton = document.querySelector(".rightCircle");

    // Left button
    leftButton.addEventListener("click", () => {
      console.log("Left button clicked");
    });

    //Right Button
    rightButton.addEventListener("click", () => {
      console.log("Right button clicked");
    });

    // Left Circle Button

    leftCircleButton.addEventListener("click", () => {
      console.log("Left circle button clicked");
    });

    // Middle Circle Button

    middleCircleButton.addEventListener("click", () => {
      console.log("Middle circle button clicked");
    });

    // Right Circle Button
    rightCircleButton.addEventListener("click", () => {
      console.log("Right circle button clicked");
    });
  }

  newImageCarousel() {
    console.log("Image Carousel module loaded");
  }
}
