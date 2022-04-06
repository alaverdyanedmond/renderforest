const burger = document.querySelector('.burger');
const navUl = document.querySelector('.nav-ul');

burger.addEventListener('click', () => {
    burger.classList.toggle('mobile');
    navUl.classList.toggle('mobile');
})


const header = document.querySelector('.header');

header.addEventListener