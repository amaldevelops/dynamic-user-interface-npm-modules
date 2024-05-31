//This is the main JavaScript file
// Amal Kariyawasam, 2024

//ES Module Imports
//Following will import the CSS file used to style the project
import "./mainStyleSheet.css";
import { dropDownMenu } from "./dropDownMenuModule.js";
import { imageCarousel } from "./imageCarouselModule.js";

const newImageCarousel = new imageCarousel();
const newDropDownMenu1 = new dropDownMenu();
const newDropDownMenu2 = new dropDownMenu();

newDropDownMenu1.createNewDropDown(
  ".dropDownButton1",
  ".dropDownMenu1",
  "click",
  3000
);

newDropDownMenu2.createNewDropDown(
  ".dropDownButton2",
  ".dropDownMenu2",
  "mouseover",
  1000
);

newImageCarousel.userInput();
