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

const form = document.querySelector('form');
const errorMessage = document.createElement('p');
errorMessage.style.color = 'red';

function validateEmail() {
  const emailInput = document.querySelector('input[type="email"]');
  const email = emailInput.value;

  if (email !== email.toLowerCase()) {
    errorMessage.textContent = 'Please enter the email address in lowercase.';
    form.appendChild(errorMessage);
    return false;
  }

  errorMessage.textContent = '';
  return true;
}

form.addEventListener('submit', (event) => {
  if (!validateEmail()) {
    event.preventDefault();
  }
});
