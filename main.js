const buttonMenu = document.querySelector('.mobile-nav__header-button')
const mobileNav = document.querySelector('.mobile-nav')

buttonMenu.addEventListener('click', buttonMenuClicked)

function buttonMenuClicked(){
    mobileNav.classList.toggle('opened')
}