/* NAVIGATION */
const nav__burgerButton = document.querySelector('.nav__burger');
const nav__nav = document.querySelector('.nav');
const nav__navLinks = document.querySelectorAll('.nav__link');
const nav__banner = document.querySelector('.banner');
const nav__container = document.querySelector('.nav__container');

nav__burgerButton.addEventListener('click', () => {
  nav__burgerButton.classList.toggle('active');
  nav__container.classList.toggle('nav__container--active');
  nav__nav.classList.toggle('nav--active');
  nav__banner.classList.toggle('active');
  document.body.classList.toggle('body--active');
});

nav__navLinks.forEach(link => 
  link.addEventListener('click', () => {
    nav__burgerButton.classList.toggle('active');
    nav__container.classList.toggle('nav__container--active');
    nav__nav.classList.toggle('nav--active');
    nav__banner.classList.toggle('active');
    document.body.classList.toggle('body--active');
  })
);
