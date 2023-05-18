const mainListDiv = document.getElementById('mainListDiv');
const mediaButton = document.getElementById('mediaButton');
const navBar = document.getElementById('navbar');
const bannerSec = document.getElementById('theSec');
mediaButton.onclick = function () {
  'use strict';
 mainListDiv.classList.toggle('show_list');
  mediaButton.classList.toggle('active');
navBar.classList.toggle('blur');
bannerSec.classList.toggle('blur')
};