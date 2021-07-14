const btn = document.querySelector('.hamburger-button');
const hamburgerMenu = document.querySelector('.hamburger-navbar-pills');
btn.addEventListener("click", ()=>{
    hamburgerMenu.classList.toggle('d-none');
})