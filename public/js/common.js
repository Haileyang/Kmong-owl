function mobileMenuHandler(){
    const dashboardHeader = document.getElementById('dashboard-header')
    dashboardHeader.classList.toggle('active')
}

function dropdownOpener(){
    const navDropdown = document.querySelector('.nav-dropdowns') 
    const navDropdownList = document.querySelector('.nav-dropdown-lists') 
    navDropdown.addEventListener('click', function(){
        navDropdown.classList.toggle('active')
        if(navDropdown.classList.contains('active')){
            navDropdownList.classList.add('active')
        }else{
            navDropdownList.classList.remove('active')
        }
    })
    if(navDropdown.classList.contains('active')){
        navDropdownList.classList.add('active')
    }else{
        navDropdownList.classList.remove('active')
    }
}
dropdownOpener()

function headerNavModifier(){
    const navList = document.querySelectorAll('.nav-list')
    for (let i=0; i<navList.length; i++){
        navList[i].addEventListener('mouseover', function(){
            navList[i].classList.add('hover')
            console.log('hi')
        })
        navList[i].addEventListener('mouseout', function(){
            navList[i].classList.remove('hover')
            console.log('hi')
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