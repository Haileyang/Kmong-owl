function mobileMenuHandler(){
    const dashboardHeader = document.getElementById('dashboard-header')
    dashboardHeader.classList.toggle('active')
}

// let headerDropdownList = document.querySelectorAll('.nav-dropdown-header')
// let currentMenu

// // MOBILE MENU -TOGGLE LIST
// function subMenuHandler() {
//     if (currentMenu) {
//         currentMenu.classList.remove('on')
//     }
//     this.classList.toggle('on');
//     currentMenu = this
// }
// for (var i = 0; i < headerDropdownList.length; i++) {
//     headerDropdownList[i].addEventListener('click', subMenuHandler)
// }

function dropdownOpener(){
    const navDropdownHeader = document.querySelector('.nav-dropdown-header') 
    const navDropdownList = document.querySelector('.nav-dropdown-lists') 
    navDropdownHeader.classList.toggle('active')
    navDropdownList.classList.toggle('active')
}
