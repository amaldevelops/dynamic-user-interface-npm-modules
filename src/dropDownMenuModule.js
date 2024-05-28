//This Node Module will allow you to create drop down menus

//Usage
// buttonName is the class name of the button to apply drop down to
// menuContent is the class name of the content that will be displayed in the drop down, this needs to be hard coded in the HTML document
// buttonType, you can set click, mouseover
// menuDelay is an integer value in milliseconds to set the menu display time after button click, i.e 3000 = 3 Seconds

export class dropDownMenu {
  constructor() {}

  createNewDropDown(buttonName, menuContent, buttonType, menuDelay) {
    const dropDownMenu = document.querySelector(menuContent);
    const dropDownButton = document.querySelector(buttonName);

    dropDownMenu.style.display = "none";

    dropDownButton.addEventListener(buttonType, function () {
      dropDownMenu.style.display = "block";

      // Hide the menu after x seconds using setTimeout
      setTimeout(function () {
        dropDownMenu.style.display = "none";
      }, menuDelay); // 1000 milliseconds = 1 second
    });
  }
}
