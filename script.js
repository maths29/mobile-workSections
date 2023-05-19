const menuIcon = document.querySelector('.menuIcon');
const nav = document.querySelector('.overlay-menu');
const closeMenu = document.querySelector('#close-menu');
const openLink = document.querySelectorAll('#open-link');
const blurBg = document.querySelector('#blur-bg');

menuIcon.addEventListener('click', () => {
  nav.style.display = 'block';
  blurBg.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  nav.style.display = 'none';
  blurBg.style.display = 'none';
  document.body.style.overflow = 'auto';
});

openLink.forEach((link) => {
  link.addEventListener('click', () => {
    nav.style.display = 'none';
    blurBg.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
});

window.onresize = () => {
  if (window.innerWidth >= 768) {
    nav.style.display = 'none';
    blurBg.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};