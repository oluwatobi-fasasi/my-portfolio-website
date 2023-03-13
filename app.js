const handBurger = document.querySelector('.menu');
const logoHand = document.querySelector('.logo-hand');
const nav = document.querySelector('nav');
const cancelIcon = document.querySelector('.cancel-icon');

handBurger.addEventListener('click', () => {
  logoHand.classList.toggle('click-visibility');
  nav.classList.toggle('nav-click');
});

cancelIcon.addEventListener('click', () => {
  logoHand.classList.toggle('click-visibility');
  nav.classList.toggle('nav-click');
});