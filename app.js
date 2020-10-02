
const humbager = document.querySelector('.humbager')
const navbarNav = document.querySelector('.navbar-nav')
const closeNav = document.querySelector('.fa-bars')

humbager.addEventListener('click',()=>{
    navbarNav.classList.toggle('hide')
})