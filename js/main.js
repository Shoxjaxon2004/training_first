const hb = document.querySelector('.header__gam-menu');
const menu = document.querySelector('.header__menu-active');

hb.addEventListener("click", function(){
    menu.classList.toggle('active');
});