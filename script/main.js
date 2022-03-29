// get elements
const navIcon = document.getElementById('nav-icon');
const navbarCollapse = document.getElementById('navbar-collapse');

let isNavbarShow = false;

// show nav
function showNav() {
  navIcon.classList.add('open');
  navbarCollapse.classList.add('open');
  isNavbarShow = true;
}

// hide nav
function hideNav() {
  navIcon.classList.remove('open');
  navbarCollapse.classList.remove('open');
  isNavbarShow = false;
}

// onlcick navicon
navIcon.addEventListener('click', () => {
  isNavbarShow = !isNavbarShow;
  if (isNavbarShow) {
    showNav();
  } else {
    hideNav();
  }
});

// stop propagation func
function stopPropagationFunc(e) {
  console.log(e);
  e.stopPropagation();
}

/* back to top */
const backToTopBtn = document.getElementById('back-to-top-btn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

backToTopBtn.addEventListener('click', topFunction);
