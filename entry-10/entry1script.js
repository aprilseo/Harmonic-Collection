window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var body = document.body;
  
    // Define the scroll position where you want the color change to occur
    var scrollThreshold = 300; // Adjust this value as needed
  
    if (scrollPosition > scrollThreshold) {
      body.style.backgroundColor = '#000000'; // Change background to black
      body.style.color = '#FFFFFF'; // Change text color to white
    } else {
      body.style.backgroundColor = '#FFFFFF'; // Change background back to white
      body.style.color = '#000000'; // Change text color back to black
    }
  });