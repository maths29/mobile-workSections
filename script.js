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

 // Retrieve data from local storage and fill the form
 function fillFormData() {
  const formData = JSON.parse(localStorage.getItem('contactFormData'));
  if (formData) {
    document.querySelector('#full-name').value = formData.name || '';
    document.querySelector('#email').value = formData.email || '';
    document.querySelector('#message').value = formData.message || '';
  }
}

// Save form data to local storage
function saveFormData() {
  const name = document.querySelector('#full-name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  const formData = { name, email, message };
  localStorage.setItem('contactFormData', JSON.stringify(formData));
}

// Add event listeners to input fields
const inputFields = document.querySelectorAll('#Contact input, #Contact textarea');
inputFields.forEach((inputField) => {
  inputField.addEventListener('input', saveFormData);
});

// Fill the form with data on page load
fillFormData();