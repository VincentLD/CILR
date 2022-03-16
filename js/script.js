const burgerButton = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

console.log(navLinks);

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
  menu.children[0].classList.toggle('active');
  nav.classList.toggle('nav--active');
});

navLinks.forEach(link => 
  link.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    menu.children[0].classList.toggle('active');
    nav.classList.toggle('nav--active');
  })
)
