//This is the main JavaScript file

//ES Module Imports
//Following will import the CSS file used to style the project
import "./mainStyleSheet.css";
import {imageCarousel} from "./imageCarouselModule.js"
import {dropDownMenu} from "./dropDownMenuModule.js"


const newImageCarousel=new imageCarousel;
const newDropDownMenu=new dropDownMenu;

newImageCarousel.newImageCarousel();
newDropDownMenu.createNewDropDown();
