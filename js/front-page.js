/* NAVIGATION */
const nav__burgerButton = document.querySelector('.nav__burger');
const nav__menu = document.querySelector('.nav__menu');
const nav__nav = document.querySelector('.nav');
const nav__navLinks = document.querySelectorAll('.nav__link');


nav__burgerButton.addEventListener('click', () => {
  nav__burgerButton.classList.toggle('active');
  nav__menu.children[0].classList.toggle('active');
  nav__nav.classList.toggle('nav--active');
});

nav__navLinks.forEach(link => 
  link.addEventListener('click', () => {
    nav__burgerButton.classList.toggle('active');
    nav__menu.children[0].classList.toggle('active');
    nav__nav.classList.toggle('nav--active');
  })
)
