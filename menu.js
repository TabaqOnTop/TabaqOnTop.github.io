window.addEventListener('scroll', function() {
    var header = document.getElementsByClassName('header');
    if (window.scrollY > 0) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  });

  window.addEventListener('scroll', function() {
    var parallax = document.getElementById('parallax');
    var scrolled = window.scrollY;
    parallax.style.transform = 'translate3d(0, ' + scrolled * 0.5 + 'px, 0)';
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Get all the section elements
    const sections = document.querySelectorAll(".section");
  
    // Add a wheel event listener to handle scrolling
    document.addEventListener("wheel", function(event) {
      // Calculate the direction of the scroll
      const direction = event.deltaY > 0 ? 1 : -1;
  
      // Find the current active section
      let currentSection;
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
          currentSection = section;
        }
      });
  
      // Find the next section based on the direction
      let nextSection;
      if (currentSection) {
        const currentIndex = Array.from(sections).indexOf(currentSection);
        nextSection = sections[currentIndex + direction];
      }
  
      // Scroll to the next section if available
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  