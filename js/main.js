/*--------------MOSTRAR MENÚ-------------------------*/
const navMenu = document.getElementById('nav-menu'), navToggle=document.getElementById('nav-toggle'), navClose=document.getElementById('nav-close');

//Mostrar menú.
//Si la constante existe..
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//Esconder menú
//Si la constante existe...
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}