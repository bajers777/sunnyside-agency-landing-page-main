const hamburgerButton = document.querySelector('.hamburger-button');

hamburgerButton.addEventListener('click', ()=>{
    document.querySelector('.navbar-pills').classList.toggle('visible');
})