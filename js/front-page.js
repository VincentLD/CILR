/* NAVIGATION */
const nav__burgerButton = document.querySelector('.nav__burger');

const nav__menu = document.querySelector('.nav__menu');
const nav__nav = document.querySelector('.nav');
const nav__navLinks = document.querySelectorAll('.nav__link');
const nav__banner = document.querySelector('.banner');


nav__burgerButton.addEventListener('click', () => {
  nav__burgerButton.classList.toggle('active');
  nav__menu.children[1].classList.toggle('active');
  nav__nav.classList.toggle('nav--active');
  nav__banner.classList.toggle('active');
  document.body.classList.toggle('body--active');
});

nav__navLinks.forEach(link => 
  link.addEventListener('click', () => {
    nav__burgerButton.classList.toggle('active');
    nav__menu.children[1].classList.toggle('active');
    nav__nav.classList.toggle('nav--active');
    nav__banner.classList.toggle('active');
    document.body.classList.toggle('body--active');
  })
)
