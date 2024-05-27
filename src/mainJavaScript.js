//This is the main JavaScript file

//ES Module Imports
//Following will import the CSS file used to style the project
import "./mainStyleSheet.css";
import {imageCarousel} from "/imageCarousel/imageCarouselModule.js"
import {dropDownMenu} from "/dropDownMenus/dropDownMenuModule.js"


const newImageCarousel=new imageCarousel;
const newDropDownMenu=new dropDownMenu;

newImageCarousel.newImageCarousel();
newDropDownMenu.createNewDropDown();
