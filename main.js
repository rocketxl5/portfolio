const burger = document.querySelector('.burger-box');
const nav = document.querySelector('.nav-links');


const navSlide = () => {
    burger.addEventListener('click', (e) => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('animate');
    });
}

navSlide();