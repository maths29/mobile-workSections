const mainListDiv = document.getElementById('mainListDiv');
const mediaButton = document.getElementById('mediaButton');
mediaButton.onclick = function () {
  'use strict';
 mainListDiv.classList.toggle('show_list');
  mediaButton.classList.toggle('active');
};