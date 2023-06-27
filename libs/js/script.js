let navbarNav = document.querySelector('#navbar-nav')
const hamburgerMenu = document.querySelector('#hamburger-menu')

document.addEventListener("click", function (e) {
    
    if(hamburgerMenu.contains(e.target)) {
        navbarNav.classList.toggle('active')
    }

    if (!hamburgerMenu.contains(e.taget) && !navbarNav.contains(e.target)) {
        navbarNav.classLinks.remove('active')
    }
})