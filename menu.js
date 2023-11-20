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