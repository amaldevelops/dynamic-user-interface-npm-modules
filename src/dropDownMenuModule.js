//This Node Module will allow you to create drop down menus


export class dropDownMenu
{
    constructor()
    {

    }

    createNewDropDown()
    {
        const dropDownDiv=document.querySelector('.dropDownDiv')
        const dropDownMenu=document.querySelector('.dropDownMenu');
        const dropDownButton=document.querySelector('.dropDownButton');
  
        dropDownMenu.style.display="none";

        dropDownButton.addEventListener('mouseover',function()
        {
            dropDownMenu.style.display='block';
        });

        // dropDownDiv.addEventListener('mouseout', function()
        // {
        //     dropDownMenu.style.display='none';
        // });


    }
}