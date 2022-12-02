function mobileMenuHandler(){
    const dashboardHeader = document.getElementById('dashboard-header')
    dashboardHeader.classList.toggle('active')
}

function dropdownOpener(){
    const navDropdown = document.querySelector('.nav-dropdowns') 
    const navDropdownList = document.querySelector('.nav-dropdown-lists') 
    navDropdown.classList.toggle('active')
    navDropdownList.classList.toggle('active')
    
}

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
function headerNavModifier(){
}
headerNavModifier()