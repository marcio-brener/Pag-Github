/*Abre e fecha menu lateral em modo mobile*/

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
      ? menuMobile.classList.replace("bi-list", "bi-X")
      : menuMobile.classList.replace("bi-X", "bi-list");
    body.classList.toggle("menu-nav-active");   
});

