// Function to handle click event
function placeImage(event) {
    var image = document.getElementById('image');
    image.style.display = 'block'; // Display the image
  
    // Set image position based on click coordinates
    image.style.left = (event.clientX - image.width / 2) + 'px';
    image.style.top = (event.clientY - image.height / 2) + 'px';
  }
  
  // Event listener for click on the document
  document.addEventListener('click', placeImage);