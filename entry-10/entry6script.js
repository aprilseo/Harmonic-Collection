const splitButton = document.getElementById('splitButton');
const left = document.getElementById('left');
const right = document.getElementById('right');

splitButton.addEventListener('click', function() {
  left.style.width = '50%';
  right.style.width = '50%';
  right.style.opacity = '1'; // Show the right section
})

