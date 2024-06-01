"use strict";

document.getElementById('dropdown-btn').addEventListener('click', function () {
  var dropdownList = document.getElementById('dropdown-list');

  if (dropdownList.style.display === 'none') {
    dropdownList.style.display = 'block';
  } else {
    dropdownList.style.display = 'none';
  }
});

const skillBars = document.querySelectorAll('.skills__progress');

skillBars.forEach((bar) => {
  let width = bar.style.width;
  bar.style.width = '0';
  setTimeout(() => {
    bar.style.width = width;
  }, 100);
});