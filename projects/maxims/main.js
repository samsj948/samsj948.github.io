
  // Get all elements with the miraculous class and store it in the variable `miraculousElements`.
  var miraculousElements = document.querySelectorAll('.miraculous');
  // Loop through each element using `forEach`
  miraculousElements.forEach(function(element) {
    // Use `addEventListener` to add a `mouseenter` listener. This will trigger
    // a function whenever your mouse enters one of the miraculous elements.
    element.addEventListener('mouseenter', function() {
      // Loop through each miraculous element again.
      miraculousElements.forEach(function(element) {
        // Add an active class to each element.
        element.classList.add('active');
      });
    });
    // Add another event listener, this case listening for the `mouseleave` event.
    // This will remove the active class when the user's mouse leaves the element.
    element.addEventListener('mouseleave', function() {
      // Loop through each miraculous element again.
      miraculousElements.forEach(function(element) {
        // Remove the active class from each element.
        element.classList.remove('active');
      });
    });
  });
