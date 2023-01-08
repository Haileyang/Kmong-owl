function mobileMenuHandler(){
    const dashboardHeader = document.getElementById('dashboard-header')
    dashboardHeader.classList.toggle('active')
}

// MOBILE NAV SCRIPT - TOGGLE BTN
const navDropdownList = document.querySelectorAll('.nav-dropdown-lists') 
const navDropdown = document.querySelectorAll('.nav-dropdowns') 
let  currentMenu

// MOBILE MENU -TOGGLE LIST
function subMenuHandler() {
    if (currentMenu) {
        currentMenu.classList.remove('active')
    }
    this.classList.toggle('active');
    navDropdownList.classList.add('active')
    currentMenu = this
}
for (var i = 0; i < navDropdown.length; i++) {
    navDropdown[i].addEventListener('click', subMenuHandler)
}

function headerNavModifier(){
    const navList = document.querySelectorAll('.nav-list')
    for (let i=0; i<navList.length; i++){
        navList[i].addEventListener('mouseover', function(){
            navList[i].classList.add('hover')
        })
        navList[i].addEventListener('mouseout', function(){
            navList[i].classList.remove('hover')
        })
    }
}
headerNavModifier()

function textareaHandler (){
    let textArea = document.getElementById("textbox");
    let characterCounter = document.getElementById("char_count");
    const maxNumOfChars = 200;
    const countCharacters = () => {
        let numOfEnteredChars = textArea.value.length;
        let counter = numOfEnteredChars;
        characterCounter.textContent = counter + "/200";
    };
    
    textArea.addEventListener("input", countCharacters);
}
textareaHandler()